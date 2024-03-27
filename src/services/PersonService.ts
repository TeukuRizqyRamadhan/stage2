import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { register, login } from "../utils/PersonUtils"
import * as bcyrpt from "bcrypt"
import * as jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default new class PersonService {
    private readonly PersonRepository = prisma.person

    async register(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error } = register.validate(body)
            if (error) return res.status(400).json(error.message)

            const isMailRegisted = await this.PersonRepository.count({ where: { email: body.email } })
            if (isMailRegisted > 0) return res.status(400).json({ message: "Email already registed, change!" })
            // arre@gmail.com      1
            // fadil@gmail.com     1
            // taruna@gmail.com    1
            // faza@gmail.com      1

            // Email yang tidak diperbolehkan karena sudah ada di database( > 0)
            // fadil@gmail.com     1

            // Email yang diperbolehkan
            // rahmat@gmail.com  

            const hashPassword = await bcyrpt.hash(body.password, 10)

            const Person = await this.PersonRepository.create({
                data: {
                    email: body.email,
                    password: hashPassword,
                    name: body.name,
                    role: body.role,
                    created_at: new Date()
                }
            })

            return res.status(201).json(Person)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async login(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error, value } = login.validate(body)
            if (error) return res.status(400).json({ message: "Error while validating data" })

            const isMailRegisted = await this.PersonRepository.findFirst({ where: { email: value.email } })
            if (!isMailRegisted) return res.status(409).json({ message: "Email isnt Registed" })

            const isMacthPassword = await bcyrpt.compare(value.password, isMailRegisted.password)
            if (!isMacthPassword) return res.status(409).json({ message: "Incorrect Password!" })

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
}