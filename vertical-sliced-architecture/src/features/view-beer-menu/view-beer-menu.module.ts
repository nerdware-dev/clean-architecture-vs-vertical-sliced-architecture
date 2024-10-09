import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { ViewBeerMenuHandler } from './view-beer-menu.handler';
import { ViewBeerMenuController } from './view-beer-menu.controller';
import { InfrastructureModule } from 'src/infrastructure/infrastructure.module';

@Module({
  imports: [CqrsModule, InfrastructureModule],
  controllers: [ViewBeerMenuController],
  providers: [ViewBeerMenuHandler],
})
export class ViewBeerMenuModule {}
