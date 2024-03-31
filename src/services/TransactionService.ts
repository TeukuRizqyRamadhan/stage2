import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { addTrans } from "../utils/TransactionUtils"
import * as jwt from "jsonwebtoken"

const prisma = new PrismaClient()

export default new class TransactionService {
    private readonly TransactionRepository = prisma.transaction

    async addTransaction(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body;
            const { error } = addTrans.validate(body);
            if (error) return res.status(400).json(error.message);

            const tokenDecode = res.locals.loginSession.tokenPayload;
            const userId = tokenDecode.id;

            let walletId: number;
            if (body.category === "salary") {
                walletId = 1;
            } else {
                walletId = 2;
            }

            let userWallet = await prisma.wallet.findFirst({
                where: {
                    userId: userId
                }
            });

            if (!userWallet) {
                userWallet = await prisma.wallet.create({
                    data: {
                        userId: userId,
                        inFlow: 0,
                        outFlow: 0,
                        balance: 0
                    }
                });
            }

            let inFlow = userWallet.inFlow;
            let outFlow = userWallet.outFlow;
            if (walletId === 1) {
                inFlow += body.amount;
            } else {
                outFlow += body.amount;
            }
            const balance = inFlow - outFlow;

            await prisma.wallet.update({
                where: {
                    id: userWallet.id
                },
                data: {
                    inFlow: inFlow,
                    outFlow: outFlow,
                    balance: balance
                }
            });

            const addTransaction = await prisma.transaction.create({
                data: {
                    amount: body.amount,
                    date: body.date,
                    category: body.category,
                    note: body.note,
                    userId: userId,
                    walletId: walletId
                }
            });

            return res.status(201).json(addTransaction);
        } catch (error) {
            return res.status(500).json(error);
        }
    }


    async find(req: Request, res: Response) {
        try {
            const transactions = await prisma.transaction.findMany()
            return res.status(200).json(transactions)
        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findById(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id)

            if (id === null) {
                return res.status(404).json({ message: "id not found" })
            }

            const transaction = await this.TransactionRepository.findUnique({
                where: { id: id }
            })

            return res.status(200).json(transaction)

        } catch (error) {
            return res.status(500).json(error)
        }
    }

    async findByUserId(req: Request, res: Response): Promise<Response> {
        try {
            const id = Number(req.params.id)
            // console.log(id)
            if (!id) {
                return res.status(404).json({ message: "User id not provided" });
            }

            const transactions = await this.TransactionRepository.findMany({
                where: { userId: id }
            });

            if (transactions.length === 0) {
                return res.status(404).json({ message: "Transactions not found for the user" });
            }
            return res.status(200).json(transactions);

        } catch (error) {
            return res.status(500).json(error);
        }
    }

}