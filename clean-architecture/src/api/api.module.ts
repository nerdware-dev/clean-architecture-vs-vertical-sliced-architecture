import { Module } from '@nestjs/common';
import { BeerController } from './beer.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { DomainExceptionFilter } from './exception.filter';
import { APP_FILTER } from '@nestjs/core';

@Module({
  imports: [CqrsModule],
  controllers: [BeerController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: DomainExceptionFilter,
    },
  ],
})
export class ApiModule {}
