export class OrderBeerCommand {
  constructor(
    public readonly beerId: string,
    public readonly quantity: number,
  ) {}
}
