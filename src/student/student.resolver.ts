import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { StudentType, createStudentInput } from './student.types';
import { StudentService } from './student.service';

@Resolver(() => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

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
}
