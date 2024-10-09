import { Body, Controller, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { OrderBeerCommand } from './order-beer.command';
import { OrderBeerRequest, OrderBeerResponse } from './order-beer.dto';

@Controller('beers')
export class OrderBeerController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  async orderBeer(
    @Body() orderBeerRequest: OrderBeerRequest,
  ): Promise<OrderBeerResponse> {
    const { id, quantity } = orderBeerRequest;
    return this.commandBus.execute(new OrderBeerCommand(id, quantity));
  }
}
