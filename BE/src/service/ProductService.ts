import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Products";

class ProductService {
    private readonly productRepository: Repository<Product> = AppDataSource.getRepository(Product)

    async find() {
        try {
            const product = await this.productRepository.find()
            return {
                product: product
            }
        } catch (err) {
            throw new Error(err)
        }
    }

    async create(reqBody: any): Promise<any> {
        try {
            const product = this.productRepository.create({
                name: reqBody.name,
                price: reqBody.price,
            })
            await this.productRepository.save(product)

            return {
                message: "product added!",
                product: product
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }

    async update(reqBody?: any, productId?: any): Promise<any> {
        try {
            const product = await this.productRepository.findOne({
                where: {
                    id: productId
                }
            })
            product.name = reqBody.name
            product.price = reqBody.price

            await this.productRepository.save(product)

            return {
                message: "product edited!",
                product: product
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }

    async delete(productId?: any): Promise<any> {
        try {
            await this.productRepository.delete(productId)

            return {
                message: "product deleted!",
            }
        } catch (error) {
            throw new Error("dolor!")
        }
    }
}

export default new ProductService()