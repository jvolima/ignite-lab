import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/prisma/prisma.service";

@Injectable()
export class PurchasesService {
  constructor (
    private prisma: PrismaService
  ) {}

  listAllPurchases() {
    return this.prisma.purchase.findMany({
      orderBy: {
        createdAt: "desc"
      }
    });
  }
}