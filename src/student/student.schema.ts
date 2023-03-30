import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Lesson } from '../lesson/lesson.schema';

@Schema()
export class Student {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'Lesson' }], default: [] })
  lessons: Lesson[];
}

export type StudentDocumant = HydratedDocument<Student>;
export const StudentSchema = SchemaFactory.createForClass(Student);
