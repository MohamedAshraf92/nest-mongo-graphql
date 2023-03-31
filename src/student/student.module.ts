import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './student.schema';
import { StudentResolver } from './student.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
  ],
  providers: [StudentService, StudentResolver],
  exports: [MongooseModule, StudentService],
})
export class StudentModule {}
