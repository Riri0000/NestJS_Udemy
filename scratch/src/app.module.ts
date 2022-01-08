import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";

// Groups together code
@Module({
  controllers: [AppController],
})
export class AppModule {}
