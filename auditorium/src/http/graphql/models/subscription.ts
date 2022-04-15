import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Event } from './event';
import { Participant } from './participant';

@ObjectType()
export class Subscription {
  @Field(() => ID)
  id: string;

  @Field(() => Participant)
  participant: Participant;

  participantId: string;

  @Field(() => Event)
  event: Event;

  eventId: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date, { nullable: true })
  canceledAt: Date;
}
