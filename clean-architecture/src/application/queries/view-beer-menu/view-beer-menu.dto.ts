import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { Beer } from 'src/domain';

export class ViewBeerMenuResponse {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  static map(beers: Beer[]): ViewBeerMenuResponse[] {
    return beers.map((beer) => ({
      id: beer.id,
      name: beer.name,
      price: beer.price,
      stock: beer.stock,
    }));
  }
}
