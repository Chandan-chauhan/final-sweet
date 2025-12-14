import { Module } from "@nestjs/common";
import { SweetModuleBase } from "./base/sweet.module.base";
import { SweetService } from "./sweet.service";
import { SweetController } from "./sweet.controller";
import { SweetResolver } from "./sweet.resolver";

@Module({
  imports: [SweetModuleBase],
  controllers: [SweetController],
  providers: [SweetService, SweetResolver],
  exports: [SweetService],
})
export class SweetModule {}
