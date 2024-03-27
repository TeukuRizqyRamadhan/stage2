import PersonService from "../services/PersonService"
import { Request, Response } from "express"

export default new class PersonController {
    register(req: Request, res: Response) {
        PersonService.register(req, res)
    }
    login(req: Request, res: Response) {
        PersonService.login(req, res)
    }
}