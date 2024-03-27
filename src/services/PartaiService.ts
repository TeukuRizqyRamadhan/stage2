import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { addPartai } from "../utils/PartaiUtils"
import cloudinary from "../config"
import * as fs from "fs"

const prisma = new PrismaClient()

export default new class PartaiService {
    private readonly PartaiRepository = prisma.partai

    async findByID(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id)

            if (id === null) {
                return res.status(404).json({ message: "User not found" })
            }

            const partai = await this.PartaiRepository.findUnique({
                where: { id: id },
                include: {
                    leader: true
                }
            })

            return res.status(200).json(partai)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async addPartai(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { error } = addPartai.validate(body)
            if (error) return res.status(400).json(error.message)

            const image = req.file
            if (!image) return res.status(400).json({ message: "No file added!" })

            const uploadCloudinary = await cloudinary.uploader.upload(image.path, {
                folder: "batch53"
            })

            fs.unlinkSync(image.path)

            const partai = await this.PartaiRepository.create({
                data: {
                    namePartai: body.namePartai,
                    logo: uploadCloudinary.secure_url,
                    leaderID: parseInt(body.leaderID),
                    created_at: new Date()
                }
            })

            return res.status(200).json(partai)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async updatePartai(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id)
            const body = req.body

            const { error } = addPartai.validate(body)
            if (error) return res.status(400).json(error.message)

            const image = req.file
            let logoPartaiUrl = ''

            const oldPartaiData = await this.PartaiRepository.findUnique({
                where: { id: id },
                select: { logo: true }
            })

            if (image) {
                const uploadCloudinary = await cloudinary.uploader.upload(image.path, {
                    folder: "batch53"
                })

                logoPartaiUrl = uploadCloudinary.secure_url

                fs.unlinkSync(image.path)

                if (oldPartaiData && oldPartaiData.logo) {
                    const publicId = oldPartaiData.logo.split('/').pop()?.split('.')[0]
                    await cloudinary.uploader.destroy(publicId as string)
                }
            } else {
                logoPartaiUrl = oldPartaiData?.logo || ''
            }

            const partai = await this.PartaiRepository.update({
                where: { id: id },
                data: {
                    namePartai: body.namePartai,
                    logo: logoPartaiUrl,
                    leaderID: parseInt(body.leaderID),
                    created_at: new Date()
                }
            })

            return res.status(200).json(partai)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async deletePartai(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id)

            const partaiData = await this.PartaiRepository.findUnique({
                where: { id: id },
                select: { logo: true }
            })

            if (partaiData && partaiData.logo) {
                const publicId = partaiData.logo.split('/').pop()?.split('.')[0]
                await cloudinary.uploader.destroy(publicId as string)
            }

            const deletePartai = await this.PartaiRepository.delete({
                where: { id: id }
            })

            return res.status(200).json({ deletePartai: deletePartai, message: "Partai deleted succesfully" })
        } catch (error) {
            return res.status(500).json(error)
        }
    }
}