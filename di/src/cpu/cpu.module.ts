import { Module } from '@nestjs/common';
import { CpuService } from './cpu.service';
import { PowerModule } from 'src/power/power.module';

@Module({
  imports: [PowerModule],
  // 2. Import the PowerModule into the CpuModule.
  providers: [CpuService]
})
export class CpuModule {}
