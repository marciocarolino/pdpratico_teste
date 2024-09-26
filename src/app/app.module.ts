import { Module } from "@nestjs/common";
import { CustomerModule } from "./customer/customer.module";
import { AccountsPayableModule } from "./accounts_payable/accountsPayable.module";
import { ProductsModule } from "./products/products.module";

@Module({
  imports: [CustomerModule, AccountsPayableModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModules {}
