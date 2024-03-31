import UserService from "../services/UserService"
// import TransactionService from "../services/TransactionService"
import { Request, Response } from "express"

export default new class UserController {
    register(req: Request, res: Response) {
        UserService.register(req, res)
    }
    login(req: Request, res: Response) {
        UserService.login(req, res)
    }
    find(req: Request, res: Response) {
        UserService.find(req, res)
    }
}