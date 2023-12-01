import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";

@Entity({ name: 'product'})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    price: number
    
    @OneToMany(() => Transaction, (transactions) => transactions.product)
    transaction: Transaction[]
}