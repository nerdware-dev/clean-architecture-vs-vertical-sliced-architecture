import { HttpStatus } from '@nestjs/common';
import {
  BeerNotFoundError,
  InvalidBeerNameError,
  InvalidBeerPriceError,
  InvalidBeerStockError,
  InsufficientStockError,
} from 'src/domain/beer.errors';

export const errorMapping = new Map<
  unknown,
  { status: HttpStatus; message: string }
>([
  [
    BeerNotFoundError,
    { status: HttpStatus.NOT_FOUND, message: 'Beer not found' },
  ],
  [
    InvalidBeerNameError,
    {
      status: HttpStatus.BAD_REQUEST,
      message: 'Name must be at least 3 characters long',
    },
  ],
  [
    InvalidBeerPriceError,
    { status: HttpStatus.BAD_REQUEST, message: 'Price must be positive' },
  ],
  [
    InvalidBeerStockError,
    { status: HttpStatus.BAD_REQUEST, message: 'Stock must be positive' },
  ],
  [
    InsufficientStockError,
    { status: HttpStatus.BAD_REQUEST, message: 'Insufficient stock' },
  ],
]);
