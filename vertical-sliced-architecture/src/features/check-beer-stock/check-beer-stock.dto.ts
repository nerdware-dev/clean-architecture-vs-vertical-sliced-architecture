import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CheckBeerStockResponse {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  stock: number;
}
