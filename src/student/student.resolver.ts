import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { StudentType, createStudentInput } from './student.types';
import { StudentService } from './student.service';
import { Student } from './student.schema';
import { LessonService } from '../lesson/lesson.service';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(
    private studentService: StudentService,
    private lessonService: LessonService,
  ) {}

  @Query(() => [StudentType])
  getStudents() {
    return this.studentService.getStudents();
  }

  @Query(() => StudentType)
  getStudentById(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Mutation(() => StudentType)
  createStudent(
    @Args('createStudentData') createStudentData: createStudentInput,
  ) {
    return this.studentService.createStudent(createStudentData);
  }

  @ResolveField()
  async lessons(@Parent() student: Student) {
    return this.lessonService.getStudentLessons(student.lessons);
  }
}
