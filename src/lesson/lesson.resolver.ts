import { Args, Mutation, Parent, Query, Resolver } from '@nestjs/graphql';
import {
  AssignStudentsToLessonInputs,
  CreateLessonInput,
  LessonType,
} from './lesson.types';
import { LessonService } from './lesson.service';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

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
}
