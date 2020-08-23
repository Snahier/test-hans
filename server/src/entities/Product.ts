import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

  @Column("double")
  priceHt: number

  @Column("double")
  priceTtc: number

  @Column()
  quantity: number

  @Column()
  active: boolean
}
