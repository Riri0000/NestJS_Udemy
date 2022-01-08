import { Controller, Get } from "@nestjs/common";

// Handles incoming requests
// /app/asdf, /app/byeにアクセスできる
@Controller('/app')
export class AppController {
  @Get('/asdf')
  getRootRoute() {
    return "hi there";
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there!'
  }
}
