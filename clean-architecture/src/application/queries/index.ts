import { CheckBeerStockHandler } from './check-beer-stock';
import { ViewBeerMenuHandler } from './view-beer-menu';

export * from './check-beer-stock';
export * from './view-beer-menu';

export const queries = [ViewBeerMenuHandler, CheckBeerStockHandler];
