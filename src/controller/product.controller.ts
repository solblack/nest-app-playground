import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductEditRequestDTO, ProductRequestDTO } from 'src/dto';
import { ProductService } from 'src/service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProducts(): string {
    return this.productService.getProducts();
  }

  @Post()
  createProduct(@Body() product: ProductRequestDTO): ProductRequestDTO {
    return product;
  }

  @Get(':id')
  getProductById(@Param('id') id: number): string {
    return 'product with ID ' + id;
  }

  @Put(':id')
  editProductById(
    @Param('id') id: number,
    @Body() product: ProductEditRequestDTO,
  ): ProductEditRequestDTO {
    return product;
  }

  @Delete(':id')
  deleteProductById(@Param('id') id: number): string {
    return 'product with ID ' + id + ' was deleted';
  }
}
