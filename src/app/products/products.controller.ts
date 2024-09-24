import { Controller, Get, Post, Body } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { CreateProductsDTO } from "./productsDTO/products.dto";

@Controller("products")
export class ProductsController {
  constructor(readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<any> {
    return this.productsService.findAll();
  }

  @Post()
  async createProducts(
    @Body() createProducts: CreateProductsDTO,
  ): Promise<any> {
    return this.productsService.createProducts(createProducts);
  }
}
