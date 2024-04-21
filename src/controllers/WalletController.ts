import WalletService from "../services/WalletService"
import { Request, Response } from "express"

export default new class WalletController {
    findWallet(req: Request, res: Response) {
        WalletService.findWallet(req, res)
    }
}