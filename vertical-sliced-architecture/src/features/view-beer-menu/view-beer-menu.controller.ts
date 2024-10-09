import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { ViewBeerMenuQuery } from './view-beer-menu.query';
import { ViewBeerMenuResponse } from './view-beer-menu.dto';

@Controller('beers')
export class ViewBeerMenuController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getBeerMenu(): Promise<ViewBeerMenuResponse[]> {
    return this.queryBus.execute(new ViewBeerMenuQuery());
  }
}
