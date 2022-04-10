import { Injectable } from '@angular/core';


export interface Student {
  id: number;
  name: string;
  courses: any[];
}

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: Student[] = [
    {
      "id": 748341,
      "name": "Student 1",
      "courses": [],
    },
    {
      "id": 24355,
      "name": "Student 2",
      "courses": [],
    },
    {
      "id": 3435545,
      "name": "Student 3",
      "courses": [],
    },
    {
      "id": 45444,
      "name": "Student 5",
      "courses": [],
    }
  ]



  constructor() { }


  findAllStudents() {
    return this.students;
  }

  UpdateStudent(st: any) {
    console.log("🚀 ~ file: student.service.ts ~ line 41 ~ StudentService ~ UpdateStudent ~ st", st)

    const students = this.students.map(p =>
      p.name == st.name
        ? { ...p, courses: st.courses }
        : p
    );
    console.log("🚀 ~ file: student.service.ts ~ line 54 ~ StudentService ~ UpdateStudent ~ students", students)
    this.students = students;

  }



  findStudent(id: number) {
    return this.students.find(o => o.id == id);
  }


  saveStudent(st: Student) {
    console.log("🚀 ~ file: student.service.ts ~ line 70 ~ StudentService ~ saveStudent ~ st", st)
    st.id = Math.floor((Math.random() * 10000000) + 1);
    st.courses = []
    this.students.push(st);
  }



  deleteStudent(id: number) {
    this.students = this.students.filter(function (student) {
      return student.id != id;
    });
  }
}
