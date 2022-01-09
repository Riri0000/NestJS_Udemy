import { Module } from '@nestjs/common';
import { PowerService } from './power.service';

@Module({
  // providers only accessable inside the module
  providers: [PowerService],
  // 1. Add PowerService to the PowerModule's list of exports
  exports: [PowerService],
})
export class PowerModule {}
