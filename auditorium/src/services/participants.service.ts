import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';

@Injectable()
export class ParticipantsService {
  constructor(private prisma: PrismaService) {}

  listAllParticipants() {
    return this.prisma.participant.findMany();
  }
}
