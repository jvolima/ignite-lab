import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('User')
@Directive('@extends')
@Directive('@key(fields: "authUserId")')
export class Participant {
  id: string;

  @Field(() => ID)
  @Directive('@external')
  authUserId: string;
}
