import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      version: "0.0.1",
      description: "Aplicação para chat"
    };
  }
}
