import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Transaction } from "./Transaction";

@Entity({ name: 'customers'})
export class Customer {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string
    
    @Column({ select: true })
    password: string
    
    @OneToMany(() => Transaction, (transactions) => transactions.customer)
    transaction: Transaction[]
}