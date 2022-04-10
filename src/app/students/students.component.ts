import { Component, OnInit } from '@angular/core';
import { StudentService } from '../_services/student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private studentsService: StudentService) { }
  students: any;


  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents() {
    this.students = this.studentsService.findAllStudents();
    console.log("🚀 ~ file: students.component.ts ~ line 20 ~ StudentsComponent ~ loadStudents ~ students", this.students)
  }


  deleteStudent(id: number): void {
    this.studentsService.deleteStudent(id);
    this.loadStudents();
  }

}
