import { Query, Resolver } from '@nestjs/graphql';
import { ParticipantsService } from 'src/services/participants.service';
import { Participant } from '../models/participant';

@Resolver(() => Participant)
export class ParticipantsResolver {
  constructor(private participantsService: ParticipantsService) {}

  @Query(() => [Participant])
  participants() {
    return this.participantsService.listAllParticipants();
  }
}
