import { Injectable } from '@nestjs/common';
import { BeerRepository } from 'src/application/repositories';
import { Beer } from 'src/domain';

@Injectable()
export class BeerRepositoryInMemory extends BeerRepository {
  private readonly beers: Beer[] = [];

  constructor(initialData: Beer[]) {
    super();
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
