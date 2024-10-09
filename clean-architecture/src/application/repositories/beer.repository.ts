import { Beer } from 'src/domain';

export abstract class BeerRepository {
  abstract findAll(): Promise<Beer[]>;
  abstract findById(id: string): Promise<Beer | null>;
  abstract create(beer: Beer): Promise<void>;
  abstract update(beer: Beer): Promise<void>;
}
