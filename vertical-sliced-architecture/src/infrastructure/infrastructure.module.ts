import { Global, Module } from '@nestjs/common';
import { Beer } from './beer.entity';
import { BeerRepository } from './beer.repository';

const initialBeerData: Beer[] = [
  new Beer('99f5bc02-a062-4ea2-8609-6133e3767dbc', 'Lager', 5.0, 10),
  new Beer('c6d2a2dd-70e5-4632-9653-1fee90476bec', 'IPA', 6.5, 10),
];

@Global()
@Module({
  providers: [
    {
      provide: BeerRepository,
      useFactory: () => {
        return new BeerRepository(initialBeerData);
      },
    },
  ],
  exports: [BeerRepository],
})
export class InfrastructureModule {}
