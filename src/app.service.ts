import { Injectable } from '@nestjs/common';
import { UtilsService } from '@gberdejo/demo-galicarlib';

@Injectable()
export class AppService {
  constructor(private readonly utilsService: UtilsService) {}

  getHello(): string {
    return this.utilsService.getDateString();
  }
}
