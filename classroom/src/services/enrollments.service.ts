import { Injectable } from "@nestjs/common";
import { PrismaService } from "../database/prisma/prisma.service";

interface GetByCourseAndStudentId {
  courseId: string;
  studentId: string;
}

@Injectable()
export class EnrollmentsService {
  constructor(
    private prisma: PrismaService
  ) {}

  listAllEnrollments() {
    return this.prisma.enrollment.findMany({
      where: {
        canceledAt: null,
      },
      orderBy: {
        createdAt: "desc",
      }
    });
  }

  getByCourseAndStudentId({ courseId, studentId }: GetByCourseAndStudentId) {
    return this.prisma.enrollment.findFirst({
      where: {
        courseId,
        studentId,
        canceledAt: null
      }
    });
  }

  listEnrollmentsByStudent(studentId: string) {
    return this.prisma.enrollment.findMany({
      where: {
        studentId,
        canceledAt: null,
      },
      orderBy: {
        createdAt: "desc"
      }
    });
  }
}