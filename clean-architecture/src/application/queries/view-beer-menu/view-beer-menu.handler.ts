import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { ViewBeerMenuQuery } from './view-beer-menu.query';
import { BeerRepository } from 'src/application/repositories';
import { ViewBeerMenuResponse } from './view-beer-menu.dto';

@QueryHandler(ViewBeerMenuQuery)
export class ViewBeerMenuHandler implements IQueryHandler<ViewBeerMenuQuery> {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute(_query: ViewBeerMenuQuery): Promise<ViewBeerMenuResponse[]> {
    const beers = await this.beerRepository.findAll();
    return ViewBeerMenuResponse.map(beers);
  }
}
