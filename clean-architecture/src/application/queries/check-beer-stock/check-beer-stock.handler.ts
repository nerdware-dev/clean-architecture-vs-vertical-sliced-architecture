import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { CheckBeerStockQuery } from './check-beer-stock.query';
import { BeerNotFoundError } from 'src/domain';
import { BeerRepository } from 'src/application/repositories';
import { CheckBeerStockResponse } from './check-beer-stock.dto';

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

    return CheckBeerStockResponse.map(beer);
  }
}
