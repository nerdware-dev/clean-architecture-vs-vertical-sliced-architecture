import { Global, Module } from '@nestjs/common';
import { BeerRepositoryInMemory } from './beer.repository.memory';
import { BeerRepository } from 'src/application';
import { Beer } from 'src/domain';

const initialBeerData: Beer[] = [
  Beer.create('99f5bc02-a062-4ea2-8609-6133e3767dbc', 'Lager', 5.0, 10),
  Beer.create('c6d2a2dd-70e5-4632-9653-1fee90476bec', 'IPA', 6.5, 10),
];

@Global()
@Module({
  providers: [
    {
      provide: BeerRepository,
      useFactory: () => {
        return new BeerRepositoryInMemory(initialBeerData);
      },
    },
  ],
  exports: [BeerRepository],
})
export class InfrastructureModule {}
