import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lesson, LessonDocument } from './lesson.schema';
import { Model } from 'mongoose';
import {
  AssignStudentsToLessonInputs,
  CreateLessonInput,
} from './lesson.types';

@Injectable()
export class LessonService {
  constructor(
    @InjectModel(Lesson.name) private lessonModel: Model<LessonDocument>,
  ) {}

  async getLessons(): Promise<Lesson[]> {
    const lessons = await this.lessonModel.find();
    return lessons;
  }

  async getLessonById(id: string): Promise<Lesson> {
    const lesson = await this.lessonModel.findById(id);
    return lesson;
  }

  async createLesson(createLessonData: CreateLessonInput): Promise<Lesson> {
    const createdLesson = await this.lessonModel.create(createLessonData);
    return createdLesson.save();
  }

  async assignStudentsToLesson(
    assignStudentsToLessonData: AssignStudentsToLessonInputs,
  ) {
    const { lessonId, students } = assignStudentsToLessonData;
    const lesson = await this.lessonModel.findById(lessonId);
    lesson.students = lesson.students.concat(students);
    return lesson.save();
  }

  async getStudentLessons(lessonsIds): Promise<Lesson[]> {
    const lessons = await this.lessonModel.find({ _id: { $in: lessonsIds } });
    return lessons;
  }
}
