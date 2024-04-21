import { Request, Response } from "express"
import { addCat } from "../utils/CategoryUtils"
import { PrismaClient } from "@prisma/client"
import cloudinary from "../config"
import * as fs from "fs"

const prisma = new PrismaClient()

export default new class CategoryService {
    private readonly CategoryRepository = prisma.category

    async addCategory(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error } = addCat.validate(body)
            if (error) return res.status(400).json(error.message)

            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id
            const role = tokenDecode.role

            if (role != "admin") return res.status(404).json({ mesaage: "Access Block, User can't create Category!!" })

            const image = req.file
            if (!image) return res.status(400).json({ messages: "No file uploaded!" })

            const cloudinaryUpload = await cloudinary.uploader.upload(image.path, {
                folder: "category"
            })

            fs.unlinkSync(image.path)

            const newCategory = await this.CategoryRepository.create({
                data: {
                    categoryName: body.categoryName,
                    type: body.type,
                    image: cloudinaryUpload.secure_url,
                    userId: id
                }
            })

            return res.status(201).json(newCategory)
        } catch (err) {
            return res.status(500).json(err)
        }
    }


    async findCategoryByUserId(req: Request, res: Response) {
        try {
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id

            const thisCategory = await this.CategoryRepository.findMany({
                where: { userId: id }
            })

            if (!thisCategory) return res.status(400).json({
                message: "No category found!"
            })

            return res.status(201).json(thisCategory)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async findCategory(req: Request, res: Response) {
        try {
            const categorys = await prisma.category.findMany()
            return res.status(200).json(categorys)
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}