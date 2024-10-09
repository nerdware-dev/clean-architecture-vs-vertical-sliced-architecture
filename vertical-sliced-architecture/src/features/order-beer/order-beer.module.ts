import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { OrderBeerHandler } from './order-beer.handler';
import { OrderBeerController } from './order-beer.controller';

@Module({
  imports: [CqrsModule],
  controllers: [OrderBeerController],
  providers: [OrderBeerHandler],
})
export class OrderBeerModule {}
