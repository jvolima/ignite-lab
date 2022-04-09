import { Get, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { CreateProductInput } from 'src/inputs/create-product-input';
import { ProductsService } from 'src/services/products.service';
import { Product } from '../models/product';

@Resolver('test')
export class ProductsResolver {
  constructor (
    private productsService: ProductsService
  ) {}

  @Query(() => [Product])
  //@UseGuards(AuthorizationGuard)
  products() {
    return this.productsService.listAllProducts();
  }

  @UseGuards(AuthorizationGuard)
  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
