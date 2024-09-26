import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsEntity } from "src/entities/products.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductsService } from "./products.service";

@Module({
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
})
export class ProductsModule {}
