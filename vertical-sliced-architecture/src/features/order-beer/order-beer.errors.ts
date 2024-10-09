export class BeerNotFoundError extends Error {
  constructor(message: string = 'Beer not found') {
    super(message);
    this.name = 'BeerNotFoundError';
  }
}
export class InsufficientStockError extends Error {
  constructor(message: string = 'Insufficient stock') {
    super(message);
    this.name = 'InsufficientStockError';
  }
}
