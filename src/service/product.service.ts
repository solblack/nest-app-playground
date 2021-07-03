import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  getProducts(): string {
    /* eslint-disable */
    const test = {
      name: 'sol',
      age: 34,
    };
    /* eslint-enable */

    return 'all products';
  }
}
