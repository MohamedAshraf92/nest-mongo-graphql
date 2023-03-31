import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import {
  AssignStudentsToLessonInputs,
  CreateLessonInput,
  LessonType,
} from './lesson.types';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.schema';
import { StudentService } from '../student/student.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService,
    private studentService: StudentService,
  ) {}

  @Query(() => [LessonType])
  getLessons() {
    return this.lessonService.getLessons();
  }

  @Query(() => LessonType)
  getLessonById(@Args('id') id: string) {
    return this.lessonService.getLessonById(id);
  }

  @Mutation(() => LessonType)
  createLesson(@Args('createLessonData') createLessonData: CreateLessonInput) {
    return this.lessonService.createLesson(createLessonData);
  }

  @Mutation(() => LessonType)
  assignStudentsToLesson(
    @Args('assignStudentsToLessonInputs')
    assignStudentsToLessonInputs: AssignStudentsToLessonInputs,
  ) {
    return this.lessonService.assignStudentsToLesson(
      assignStudentsToLessonInputs,
    );
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    const students = await this.studentService.getSomeStudents(lesson.students);
    console.log({ students });
    return students;
  }
}
