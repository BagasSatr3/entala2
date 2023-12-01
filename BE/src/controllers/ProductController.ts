import { Request, Response } from "express";
import ProductService from "../service/ProductService";

class ProductControlller {

    async find(req: Request, res: Response) {
        try {
            const response = await ProductService.find()
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: error.message })
        }
    }

    async create(req: Request, res: Response) {
        try {
            const response = await ProductService.create(req.body)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "sit amet" })
        }
    }

    async update(req: Request, res: Response) {
        try {
            const params = parseInt(req.params.id)
            const response = await ProductService.update(req.body, params)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "sit amet" })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const params = parseInt(req.params.id)
            const response = await ProductService.delete(params)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "sit amet" })
        }
    }
}

export default new ProductControlller()