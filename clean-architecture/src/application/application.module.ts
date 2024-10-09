import { Global, Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { commands } from './commands';
import { queries } from './queries';

@Global()
@Module({
  imports: [CqrsModule],
  providers: [...queries, ...commands],
})
export class ApplicationModule {}
