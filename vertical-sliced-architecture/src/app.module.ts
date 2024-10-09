import { Module } from '@nestjs/common';
import { OrderBeerModule } from './features/order-beer/order-beer.module';
import { ViewBeerMenuModule } from './features/view-beer-menu/view-beer-menu.module';
import { CheckBeerStockModule } from './features/check-beer-stock/check-beer-stock.module';

@Module({
  imports: [ViewBeerMenuModule, OrderBeerModule, CheckBeerStockModule],
})
export class AppModule {}
