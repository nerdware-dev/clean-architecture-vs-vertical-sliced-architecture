import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { CheckBeerStockQuery } from './check-beer-stock.query';
import { CheckBeerStockResponse } from './check-beer-stock.dto';
import { BeerNotFoundError } from './check-beer-stock.errors';
import { BeerRepository } from 'src/infrastructure/beer.repository';

@QueryHandler(CheckBeerStockQuery)
export class CheckBeerStockHandler
  implements IQueryHandler<CheckBeerStockQuery>
{
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute({
    beerId,
  }: CheckBeerStockQuery): Promise<CheckBeerStockResponse> {
    const beer = await this.beerRepository.findById(beerId);
    if (!beer) {
      throw new BeerNotFoundError();
    }

    return {
      id: beer.id,
      stock: beer.stock,
    };
  }
}
