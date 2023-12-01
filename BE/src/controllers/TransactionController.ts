import { Request, Response } from "express";
import TransactionService from "../service/TransactionService";

class TransactionController {
    async find(req: Request, res: Response) {
        try {
            const response = await TransactionService.find()
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const loginSession = res.locals.loginSession

            const response = await TransactionService.create(req.body, loginSession)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const params = parseInt(req.params.id)
            const response = await TransactionService.update(req.body, params)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "sit amet" })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const params = parseInt(req.params.id)
            const response = await TransactionService.delete(params)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "sit amet" })
        }
    }
}

export default new TransactionController()