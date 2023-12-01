import { Request, Response } from "express";
import CustomerService from "../service/CustomerService";

class CustomerController {
    find(req: Request, res: Response) {
        CustomerService.find(req,res)
    }
    register(req: Request, res: Response) {
        CustomerService.register(req,res)
    }

    login(req: Request, res: Response) {
        CustomerService.login(req,res)
    }

    async update(req: Request, res: Response) {
        try {
            const params = parseInt(req.params.id)
            const response = await CustomerService.update(req.body, params)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "sit amet" })
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const params = parseInt(req.params.id)
            const response = await CustomerService.delete(params)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({ error: "sit amet" })
        }
    }

}

export default new CustomerController()