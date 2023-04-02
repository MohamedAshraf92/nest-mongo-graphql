import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student, StudentDocumant } from './student.schema';
import { Model } from 'mongoose';
import { CreateStudentInput } from './student.types';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<StudentDocumant>,
  ) {}

  async getStudents(): Promise<Student[]> {
    const students = await this.studentModel.find();
    return students;
  }

  async getSomeStudents(idsArray): Promise<Student[]> {
    const students = await this.studentModel.find({ _id: { $in: idsArray } });
    return students;
  }

  async getStudentById(id: string): Promise<Student> {
    const student = await this.studentModel.findById(id);
    return student;
  }

  async createStudent(createStudentData: CreateStudentInput): Promise<Student> {
    const createdStudent = await this.studentModel.create(createStudentData);
    return createdStudent.save();
  }
}
