import { Injectable } from "@nestjs/common";

@Injectable()
export class ProductsService {
  private readonly products: Products[] = [];

  create(products: Products) {
    this.products.push(products);
  }

  findAll(): Products[] {
    return this.products;
  }
}
