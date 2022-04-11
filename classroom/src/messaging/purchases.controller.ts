import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";

export interface Customer {
  authUserId: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
}

export interface PurchaseCreatedParams {
  customer: Customer;
  product: Product;
}

@Controller()
export class PurchasesController {

  @EventPattern('purchases.new-purchase')
  async purchaseCreated(
    @Payload('value') payload: PurchaseCreatedParams,
  ) {
    console.log(payload);
  }
}