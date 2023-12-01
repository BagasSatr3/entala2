import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Customer } from "./Customers";
import { Product } from "./Products";

@Entity({ name: 'transactions'})
export class Transaction {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    invoiceNumber: number

    @Column()
    invoiceDate: Date
    
    @Column()
    qty: number

    @Column()
    total_amount: number

    @Column()
    total_count: number

    @ManyToOne(() => Customer, (customer) => customer.transaction, {
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        // cascade: true
    })

    customer: Customer

    @ManyToOne(() => Product, (product) => product.transaction, {
        onDelete : "CASCADE",
        onUpdate : "CASCADE",
        // cascade: true
    })
    product: Product
}