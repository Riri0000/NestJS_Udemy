import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  // 3. Define the constructor method on CpuService and add PoowerService to it
  constructor(private powerService: PowerService) {}
}

