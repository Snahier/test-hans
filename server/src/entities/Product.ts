import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from "typeorm"
import { Category } from "./Category"

@Entity({ name: "products" })
export class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  image: string

  @Column()
  reference: string

  @Column()
  name: string

  @Column("decimal")
  priceHt: number

  @Column("decimal")
  priceTtc: number

  @Column()
  quantity: number

  @Column("boolean")
  active: boolean

  @ManyToMany((type) => Category)
  @JoinTable()
  categories: Category[]
}
