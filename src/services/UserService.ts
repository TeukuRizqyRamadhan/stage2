import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { register, login } from "../utils/UserUtils"
import * as bcyrpt from "bcrypt"
import * as jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default new class UserService {
    private readonly UserRepository = prisma.user

    async register(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error } = register.validate(body)
            if (error) return res.status(400).json(error.message)

            const isMailRegisted = await this.UserRepository.count({ where: { email: body.email } })
            if (isMailRegisted > 0) return res.status(400).json({ message: "Email already registed, change!" })

            const hashPassword = await bcyrpt.hash(body.password, 10)

            const User = await this.UserRepository.create({
                data: {
                    email: body.email,
                    password: hashPassword,
                    fullName: body.fullName,
                    role: "user",
                    createdAt: new Date()
                }
            })

            const userWallet = await prisma.wallet.create({
                data: {
                    userId: User.id,
                    inFlow: 0,
                    outFlow: 0,
                    balance: 0
                }
            });

            return res.status(201).json({ User, userWallet });
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error, value } = login.validate(body)
            if (error) return res.status(400).json({ message: "Error while validating data" })

            const isMailRegisted = await this.UserRepository.findFirst({ where: { email: value.email } })
            if (!isMailRegisted) return res.status(409).json({ message: "Email isnt Registed" })

            const isMatchPassword = await bcyrpt.compare(value.password, isMailRegisted.password)
            if (!isMatchPassword) return res.status(409).json({ message: "Incorrect Password!" })

            const tokenPayload = {
                id: isMailRegisted.id,
                role: isMailRegisted.role
            }

            const token = jwt.sign({ tokenPayload }, 'SECRET_KEY', { expiresIn: 99999 })

            return res.status(200).json(token)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async find(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany()
            return res.status(200).json(users)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}