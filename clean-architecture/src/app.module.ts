import { Module } from '@nestjs/common';
import { InfrastructureModule } from './infrastructure/infrastructure.module';
import { ApiModule } from './api/api.module';
import { DomainModule } from './domain/domain.module';
import { ApplicationModule } from './application/application.module';

@Module({
  imports: [InfrastructureModule, ApiModule, DomainModule, ApplicationModule],
})
export class AppModule {}
