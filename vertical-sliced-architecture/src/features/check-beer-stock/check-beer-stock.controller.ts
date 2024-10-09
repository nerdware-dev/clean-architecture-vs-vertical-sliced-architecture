import { Controller, Get, Param } from '@nestjs/common';
import { CheckBeerStockResponse } from './check-beer-stock.dto';
import { CheckBeerStockQuery } from './check-beer-stock.query';
import { QueryBus } from '@nestjs/cqrs';

@Controller('beers')
export class CheckBeerStockController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get(':id')
  async checkBeerStock(
    @Param('id') id: string,
  ): Promise<CheckBeerStockResponse> {
    return this.queryBus.execute(new CheckBeerStockQuery(id));
  }
}
