import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CustomerEntity } from "./customer.entity";

@Entity({ name: "products" })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => CustomerEntity, (CustomerEntity) => CustomerEntity.id)
  customerEntity: ProductsEntity;

  @Column({ name: "EAN_GTIN" })
  EAN_GTIN: string;

  @Column({ name: "name" })
  name: string;

  @Column({ name: "photo_thumbnail" })
  phoro_thumbnail: string;

  @Column({ name: "category" })
  category: string;

  @Column({ name: "subcategory" })
  subcategory: string;

  @Column({ name: "brand" })
  brand: string;

  @Column({ name: "location" })
  location: string;

  @Column({ name: "salePrice" })
  salePrice: number;

  @Column({ name: "CostPrice" })
  CostPrice: number;

  @Column({ name: "Currentstorage" })
  CurrentStorage: number;

  @Column({ name: "StorageLimit" })
  StorageLimit: number;

  @Column({ name: "location" })
  unitOfMeasurement: number;

  @Column({ name: "note" })
  note: string;
}
