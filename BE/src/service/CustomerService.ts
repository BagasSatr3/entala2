import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { Customer } from "../entities/Customers";


class AuthService {
    private readonly customerRepository: Repository<Customer> =
    AppDataSource.getRepository(Customer)
    
    async find(req: Request, res: Response) {
        try {
            const user = await this.customerRepository.find()
            return res.status(200).json(user)
        } catch (err) {
            return res.status(500).json({ error: "error while getting users" })
        }
    }

    async register(req: Request, res: Response) {
        try {
            const data = req.body
            const username = req.body.username
            const password = req.body.password

            const salt = await bcrypt.genSalt()
            const hashed = await bcrypt.hash(password, salt)

            const customer = this.customerRepository.create({
                username: data.username,
                password: hashed,
            })

            const existingUsername = await this.customerRepository.findOne({where:{username}})

            if (existingUsername) {
                return res.status(400).json({ error: 'Username already exists' });
            } else {
                const results = await this.customerRepository.save(customer)
                return res.send(results)
            }
            
        } catch (err) {
            return res.status(500).send(err)
        }
    }


    async login(req: Request, res: Response) {
        // try {
            const username= req.body.username
            const password = req.body.password
            const customer = await this.customerRepository.findOne({
                where: {
                    username: username
                }
            })
            if(!customer) {
                return res.status(401).json({ error: 'Invalid username or password' });
            }
            const comparePass = await bcrypt.compare(password, customer.password)

            const secretKey = "adalahmanjur"

            const token = jwt.sign({customer}, secretKey,{
                expiresIn: '1h'
            })

            if (comparePass){
                // console.log("Authentication", accessToken)
                res.json({customer,token});
            } else {
                return res.status(401).json({ error: 'username or password' });
            }

        // } catch (err) {
        //     return res.status(500).json(console.error);
        // }
    }

    async update(reqBody?: any, customerId?: any): Promise<any> {
        try {
            const customer = await this.customerRepository.findOne({
                where: {
                    id: customerId
                }
            })
            
            customer.username = reqBody.username

            await this.customerRepository.save(customer)

            return {
                message: "customer edited!",
                customer: customer
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }

    async delete(customerId?: any): Promise<any> {
        try {
            await this.customerRepository.delete(customerId)

            return {
                message: "customer deleted!",
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }

    
}

export default new AuthService()