import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"
import { addTrans } from "../utils/TransactionUtils"
import * as jwt from "jsonwebtoken"
import { date } from "joi"
import { number } from "joi"

const prisma = new PrismaClient()

export default new class TransactionService {
    private readonly TransactionRepository = prisma.transaction
    private readonly WalletRepository = prisma.wallet
    private readonly CategoryRepository = prisma.category

    async addTransaction(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body;
            const { error } = addTrans.validate(body);
            if (error) return res.status(400).json(error.message);

            const tokenDecode = res.locals.loginSession.tokenPayload;
            const id: number = tokenDecode.id

            const thisWallet = await this.WalletRepository.findUnique({
                where: { userId: id }
            });

            if (!thisWallet) return res.status(400).json({ message: "Wallet not found!" })

            const thisCategory = await this.CategoryRepository.findUnique({
                where: { categoryName: body.category }
            })

            if (!thisCategory) return res.status(400).json({ message: "Category not found!" })

            let userWallet = await prisma.wallet.findFirst({
                where: {
                    userId: id
                }
            });

            if (!userWallet) {
                return res.status(400).json({ message: "Wallet not found!" })
            }


            if (!thisWallet || thisWallet.balance === null) {
                return res.status(400).json({ message: "Wallet balance not found!" });
            }

            const inFlow: number = thisWallet.inFlow + body.amount
            const outFlow: number = thisWallet.outFlow + body.amount
            let balance: number

            let updatedWallet: any

            if (thisCategory?.type === "Income") {
                balance = thisWallet.balance + body.amount

                const updateWallet = await this.WalletRepository.update({
                    where: { userId: id },
                    data: {
                        inFlow: inFlow,
                        balance: balance,
                        userId: id
                    }
                })

                updatedWallet = updateWallet
            } else {
                balance = thisWallet.balance - body.amount

                const updateWallet = await this.WalletRepository.update({
                    where: { userId: id },
                    data: {
                        outFlow: outFlow,
                        balance: balance,
                        userId: id
                    }
                })

                updatedWallet = updateWallet
            }

            const addTransaction = await prisma.transaction.create({
                data: {
                    amount: body.amount,
                    date: body.date,
                    category: body.category,
                    note: body.note,
                    userId: id,
                    createdAt: new Date()
                }
            });
            return res.status(201).json({ addTransaction, updatedWallet });
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

    async findByUserId(req: Request, res: Response) {
        try {
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id: number = tokenDecode.id

            const thisTransaction = await this.TransactionRepository.findMany({
                where: { userId: id },
                include: {
                    categoryDetail: true
                }
            })

            return res.status(201).json(thisTransaction)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async findLastMonthTransaction(req: Request, res: Response) {
        try {
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id

            const thisTransaction = await this.TransactionRepository.findMany({
                where: { userId: id },
                include: {
                    categoryDetail: true
                }
            })

            const lastMonth: any[] = []

            {
                thisTransaction.map((data) => {
                    const tMonth: number = new Date().getMonth() + 1

                    const dMonth: number = new Date(data.date).getMonth() + 1

                    const nData = {
                        ...data,
                        dMonth
                    }

                    if (nData.dMonth + 1 === tMonth) {
                        lastMonth.push(nData)
                    }

                })
            }

            return res.status(201).json(lastMonth)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async findThisMonthTransaction(req: Request, res: Response) {
        try {
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id

            const thisTransaction = await this.TransactionRepository.findMany({
                where: { userId: id },
                include: {
                    categoryDetail: true
                }
            })

            const thisMonth: any[] = []

            {
                thisTransaction.map((data) => {
                    const tMonth: number = new Date().getMonth() + 1

                    const dMonth: number = new Date(data.date).getMonth() + 1

                    const nData = {
                        ...data,
                        dMonth
                    }

                    if (nData.dMonth === tMonth) {
                        thisMonth.push(nData)
                    }

                })
            }

            return res.status(201).json(thisMonth)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

    async findFutureTransaction(req: Request, res: Response) {
        try {
            const tokenDecode = res.locals.loginSession.tokenPayload
            const id = tokenDecode.id

            const thisTransaction = await this.TransactionRepository.findMany({
                where: { userId: id },
                include: {
                    categoryDetail: true
                }
            })

            const thisFuture: any[] = []

            {
                thisTransaction.map((data) => {
                    const tMonth: number = new Date().getMonth() + 1

                    const dMonth: number = new Date(data.date).getMonth() + 1

                    const nData = {
                        ...data,
                        dMonth
                    }

                    if (tMonth + 1 === nData.dMonth) {
                        thisFuture.push(nData)
                    }

                })
            }

            return res.status(201).json(thisFuture)
        } catch (err) {
            return res.status(500).json(err)
        }
    }

}