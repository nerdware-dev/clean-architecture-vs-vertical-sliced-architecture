import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import {
  OrderBeerCommand,
  CheckBeerStockQuery,
  ViewBeerMenuQuery,
  CheckBeerStockResponse,
  OrderBeerRequest,
  OrderBeerResponse,
} from 'src/application';
import { Beer } from 'src/domain';

@Controller('beers')
export class BeerController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Get()
  async getBeerMenu(): Promise<Beer[]> {
    return this.queryBus.execute(new ViewBeerMenuQuery());
  }

  @Get(':id')
  async checkBeerStock(
    @Param('id') id: string,
  ): Promise<CheckBeerStockResponse> {
    return this.queryBus.execute(new CheckBeerStockQuery(id));
  }

  @Post()
  async orderBeer(
    @Body() orderBeerRequest: OrderBeerRequest,
  ): Promise<OrderBeerResponse> {
    const { id, quantity } = orderBeerRequest;
    return this.commandBus.execute(new OrderBeerCommand(id, quantity));
  }
}
