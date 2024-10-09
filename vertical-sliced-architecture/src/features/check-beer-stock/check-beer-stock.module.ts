import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CheckBeerStockController } from './check-beer-stock.controller';
import { CheckBeerStockHandler } from './check-beer-stock.handler';

@Module({
  imports: [CqrsModule],
  controllers: [CheckBeerStockController],
  providers: [CheckBeerStockHandler],
})
export class CheckBeerStockModule {}
