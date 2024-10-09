import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Beer } from 'src/domain';

export class CheckBeerStockResponse {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  static map(beer: Beer): CheckBeerStockResponse {
    return {
      id: beer.id,
      stock: beer.stock,
    };
  }
}
