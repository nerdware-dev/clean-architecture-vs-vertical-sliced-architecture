import { BeerValidator } from './beer.validator';

export class Beer {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly stock: number,
  ) {}

  static create(
    id: string | undefined,
    name: string,
    price: number,
    stock: number,
  ) {
    BeerValidator.validateAll(name, price, stock);
    return new Beer(id ?? crypto.randomUUID(), name, price, stock);
  }
}
