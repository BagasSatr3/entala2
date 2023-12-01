import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Transaction } from "../entities/Transaction";

class TransactionService {
    private readonly transactionRepository: Repository<Transaction> = AppDataSource.getRepository(Transaction)

    async find() {
        try {
            const transactions = await this.transactionRepository.find({
                relations: ['customer', 'product'], 
            });
    
            return {
                message: "Transactions retrieved successfully!",
                transactions: transactions,
            };
        } catch (err) {
            throw new Error(err);
        }
    }
    

    async create(reqBody: any, loginSession:any): Promise<any> {
        try {
            const transaction = this.transactionRepository.create({
                invoiceNumber: reqBody.invoiceNumber,
                invoiceDate: new Date(),
                qty: reqBody.qty,
                total_amount: reqBody.total_amount,
                total_count: reqBody.total_count,
                product: reqBody.product,
                customer: loginSession.customer.id,
            })
            await this.transactionRepository.save(transaction)

            return {
                message: "transaction added!",
                transaction: transaction
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }

    async update(reqBody?: any, transactionId?: any): Promise<any> {
        try {
            const transaction = await this.transactionRepository.findOne({
                where: {
                    id: transactionId
                }
            })
            
            transaction.product = reqBody.product
            transaction.qty = reqBody.qty
            transaction.product = reqBody.product
            transaction.total_amount = reqBody.total_amount
            transaction.total_count = reqBody.total_count

            await this.transactionRepository.save(transaction)

            return {
                message: "transaction edited!",
                transaction: transaction
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }

    async delete(transactionId?: any): Promise<any> {
        try {
            await this.transactionRepository.delete(transactionId)

            return {
                message: "transaction deleted!",
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }
}

export default new TransactionService()