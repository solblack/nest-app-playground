import { Module } from '@nestjs/common';
import { ProductService } from './service';
import { ProductController } from './controller';

@Module({
  imports: [],
  controllers: [ProductController],
  providers: [ProductService],
})
export class AppModule {}
