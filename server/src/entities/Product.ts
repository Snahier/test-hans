import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
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
}
