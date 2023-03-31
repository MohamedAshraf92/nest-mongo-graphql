import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';
import { StudentType } from '../student/student.types';
import { Student } from '../student/student.schema';

@ObjectType('Lesson')
export class LessonType {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field(() => [StudentType])
  students: string[];
}

@InputType()
export class CreateLessonInput {
  @MinLength(5)
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  startDate: string;

  @IsNotEmpty()
  @Field()
  endDate: string;
}

@InputType()
export class AssignStudentsToLessonInputs {
  @Field(() => ID)
  @IsNotEmpty()
  lessonId: string;

  @Field(() => [ID])
  @IsNotEmpty()
  students: Student[];
}
