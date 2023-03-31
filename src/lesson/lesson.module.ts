import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from './lesson.schema';
import { LessonService } from './lesson.service';
import { StudentModule } from '../student/student.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: LessonSchema, name: Lesson.name }]),
    StudentModule,
  ],
  providers: [LessonResolver, LessonService],
  exports: [MongooseModule],
})
export class LessonModule {}
