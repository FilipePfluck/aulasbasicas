import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
export default class Product {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    name: string

    @Column()
    description: string

    @Column()
    price: number

    @Column()
    image_url: string
}