import { HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProductsEntity } from "src/entities/products.entity";
import { Repository } from "typeorm";
import { CreateProductsDTO } from "./productsDTO/products.dto";
import { CustomException } from "src/utils/customException";
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private readonly products: Repository<ProductsEntity>,
  ) {}

  async findAll(): Promise<any> {
    return this.products.find();
  }

  async createProducts(createProducts: CreateProductsDTO): Promise<any> {
    const create = this.products.create({});
    return await this.products.save(create);
  }
}
