export class DomainError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DomainError';
  }
}

export class InvalidBeerNameError extends DomainError {
  constructor(message: string = 'Name must be at least 3 characters long') {
    super(message);
    this.name = 'InvalidBeerNameError';
  }
}

export class InvalidBeerPriceError extends DomainError {
  constructor(message: string = 'Price must be positive') {
    super(message);
    this.name = 'InvalidBeerPriceError';
  }
}

export class InvalidBeerStockError extends DomainError {
  constructor(message: string = 'Stock must be positive') {
    super(message);
    this.name = 'InvalidBeerStockError';
  }
}

export class BeerNotFoundError extends DomainError {
  constructor(message: string = 'Beer not found') {
    super(message);
    this.name = 'BeerNotFoundError';
  }
}

export class InsufficientStockError extends DomainError {
  constructor(message: string = 'Insufficient stock') {
    super(message);
    this.name = 'InsufficientStockError';
  }
}
