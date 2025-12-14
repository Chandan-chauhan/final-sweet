import * as graphql from "@nestjs/graphql";
import { SweetResolverBase } from "./base/sweet.resolver.base";
import { Sweet } from "./base/Sweet";
import { SweetService } from "./sweet.service";

@graphql.Resolver(() => Sweet)
export class SweetResolver extends SweetResolverBase {
  constructor(protected readonly service: SweetService) {
    super(service);
  }
}
