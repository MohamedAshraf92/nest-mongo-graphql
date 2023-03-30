import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { MinLength } from 'class-validator';
import { LessonType } from '../lesson/lesson.types';

@ObjectType('Student')
export class StudentType {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field(() => LessonType)
  lessons: string[];
}

@InputType()
export class createStudentInput {
  @Field()
  @MinLength(3)
  firstName: string;

  @Field()
  @MinLength(3)
  lastName: string;
}
