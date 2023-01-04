import { Controller, Get, Ip, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpService } from '@nestjs/axios';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly httpService: HttpService,
  ) {}

  @Get()
  async getHello(@Req() request: Request, @Ip() myIp: string): Promise<any> {
    console.log(myIp);
    const remoteAdd = request.socket.remoteAddress;
    const ipData = await this.httpService
      .get(`http://ip-api.com/json/24.48.0.1`)
      .toPromise();
    return { ip: remoteAdd };
    // return this.appService.getHello();
  }
}
