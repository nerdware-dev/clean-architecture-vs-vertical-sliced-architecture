import { Injectable } from '@nestjs/common';
import { Beer } from './beer.entity';

@Injectable()
export class BeerRepository {
  private readonly beers: Beer[] = [];

  constructor(initialData: Beer[]) {
    this.beers = initialData;
  }

  findAll(): Promise<Beer[]> {
    return Promise.resolve(this.beers);
  }

  findById(id: string): Promise<Beer | null> {
    const beer = this.beers.find((beer) => beer.id === id);
    return Promise.resolve(beer || null);
  }

  create(beer: Beer): Promise<void> {
    this.beers.push(beer);
    return Promise.resolve();
  }

  update(beer: Beer): Promise<void> {
    const index = this.beers.findIndex((b) => b.id === beer.id);
    if (index !== -1) {
      this.beers[index] = beer;
    }
    return Promise.resolve();
  }
}
