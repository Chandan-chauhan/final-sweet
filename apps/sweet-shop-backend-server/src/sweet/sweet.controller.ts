import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SweetService } from "./sweet.service";
import { SweetControllerBase } from "./base/sweet.controller.base";

@swagger.ApiTags("sweets")
@common.Controller("sweets")
export class SweetController extends SweetControllerBase {
  constructor(protected readonly service: SweetService) {
    super(service);
  }
}
