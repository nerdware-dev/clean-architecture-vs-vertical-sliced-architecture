import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OrderBeerCommand } from './order-beer.command';
import { Beer } from 'src/infrastructure/beer.entity';
import { BeerNotFoundError, InsufficientStockError } from './order-beer.errors';
import { BeerRepository } from 'src/infrastructure/beer.repository';

@CommandHandler(OrderBeerCommand)
export class OrderBeerHandler implements ICommandHandler<OrderBeerCommand> {
  constructor(private readonly beerRepository: BeerRepository) {}

  async execute({ beerId, quantity }: OrderBeerCommand): Promise<Beer> {
    const beer = await this.beerRepository.findById(beerId);
    if (!beer) {
      throw new BeerNotFoundError();
    }

    if (beer.stock < quantity) {
      throw new InsufficientStockError();
    }

    const updatedBeer = new Beer(
      beerId,
      beer.name,
      beer.price,
      beer.stock - quantity,
    );

    await this.beerRepository.update(updatedBeer);
    return updatedBeer;
  }
}
