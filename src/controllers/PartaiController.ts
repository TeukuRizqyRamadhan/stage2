import { Request, Response } from "express"
import PartaiService from "../services/PartaiService"

export default new class PartaiController {
    findByID(req: Request, res: Response) {
        PartaiService.findByID(req, res)
    }
    addPartai(req: Request, res: Response) {
        PartaiService.addPartai(req, res)
    }
    updatePartai(req: Request, res: Response) {
        PartaiService.updatePartai(req, res)
    }
    deletePartai(req: Request, res: Response) {
        PartaiService.deletePartai(req, res)
    }
}