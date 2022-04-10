import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

@Injectable()
export class CoursesService {
  constructor(
    private prisma: PrismaService
  ) {}

  listAllCourses() {
    return this.prisma.course.findMany();
  }
}