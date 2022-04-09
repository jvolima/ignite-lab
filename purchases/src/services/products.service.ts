import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class ProductsService {
  constructor (
    private prisma: PrismaService
  ) {}

  listAllProducts() {
    return this.prisma.product.findMany();
  }
}