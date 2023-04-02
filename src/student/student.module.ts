import { Module, forwardRef } from '@nestjs/common';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentResolver } from './student.resolver';
import { LessonModule } from '../lesson/lesson.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    forwardRef(() => LessonModule),
  ],
  providers: [StudentResolver, StudentService],
  exports: [MongooseModule, StudentService],
})
export class StudentModule {}
