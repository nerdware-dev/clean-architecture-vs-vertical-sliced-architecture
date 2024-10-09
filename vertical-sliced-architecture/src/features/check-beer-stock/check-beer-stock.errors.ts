export class BeerNotFoundError extends Error {
  constructor(message: string = 'Beer not found') {
    super(message);
    this.name = 'BeerNotFoundError';
  }
}
