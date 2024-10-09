import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { OrderBeerCommand } from './order-beer.command';
import { BeerRepository } from 'src/application/repositories';
import { Beer, BeerNotFoundError, InsufficientStockError } from 'src/domain';

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

    const updatedBeer = Beer.create(
      beerId,
      beer.name,
      beer.price,
      beer.stock - quantity,
    );
    await this.beerRepository.update(updatedBeer);
    return updatedBeer;
  }
}
