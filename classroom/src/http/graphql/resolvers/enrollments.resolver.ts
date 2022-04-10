import { UseGuards } from "@nestjs/common";
import { Query, Resolver } from "@nestjs/graphql";
import { EnrollmentsService } from "../../../services/enrollments.service";
import { AuthorizationGuard } from "../../auth/authorization.guard";
import { Enrollment } from "../models/enrollment";

@Resolver(() => Enrollment)
export class EnrollmentsResolver {
  constructor (
    private enrollmentsService: EnrollmentsService
  ) {}

  @Query(() => [Enrollment])
  @UseGuards(AuthorizationGuard)
  enrollments() {
    return this.enrollmentsService.listAllEnrollments();
  }
}