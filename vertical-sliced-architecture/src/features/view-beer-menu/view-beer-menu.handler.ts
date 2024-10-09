import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ViewBeerMenuQuery } from './view-beer-menu.query';
import { ViewBeerMenuResponse } from './view-beer-menu.dto';
import { BeerRepository } from 'src/infrastructure/beer.repository';

@QueryHandler(ViewBeerMenuQuery)
export class ViewBeerMenuHandler implements IQueryHandler<ViewBeerMenuQuery> {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(_query: ViewBeerMenuQuery): Promise<ViewBeerMenuResponse[]> {
    const beers = await this.beerRepository.findAll();

    return beers.map((beer) => ({
      id: beer.id,
      name: beer.name,
      price: beer.price,
      stock: beer.stock,
    }));
  }
}
