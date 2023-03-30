import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Lesson, LessonSchema } from './lesson.schema';
import { LessonService } from './lesson.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ schema: LessonSchema, name: Lesson.name }]),
  ],
  providers: [LessonResolver, LessonService],
  exports: [MongooseModule],
})
export class LessonModule {}
