import {
  InvalidBeerNameError,
  InvalidBeerPriceError,
  InvalidBeerStockError,
} from './beer.errors';

export class BeerValidator {
  static validateName(name: string) {
    if (name.length < 3) {
      throw new InvalidBeerNameError();
    }
  }

  static validatePrice(price: number) {
    if (price < 0) {
      throw new InvalidBeerPriceError();
    }
  }

  static validateStock(stock: number) {
    if (stock < 0) {
      throw new InvalidBeerStockError();
    }
  }

  static validateAll(name: string, price: number, stock: number) {
    this.validateName(name);
    this.validatePrice(price);
    this.validateStock(stock);
  }
}
