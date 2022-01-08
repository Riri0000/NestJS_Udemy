import { Controller, Get } from "@nestjs/common";

// Handles incoming requests
@Controller()
export class AppController {
  @Get()
  getRootRoute() {
    return "hi there";
  }
}
