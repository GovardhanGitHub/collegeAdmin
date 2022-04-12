import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../_services/student.service';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  constructor(private router: Router, private toastService: ToastService,
    private formBuilder: FormBuilder, private studentService: StudentService) { }



  ngOnInit(): void {
    this.createForm();
  }

  showSuccess() {
    this.toastService.show('successfully  Student is added', { classname: 'bg-success text-light', delay: 900 });
  }


  studentForm: any;
  private createForm(): void {

    this.studentForm = this.formBuilder.group({
      name: new FormControl(''),
    });

  }


  save() {
    this.studentService.saveStudent(this.studentForm.value);
    this.showSuccess();
    setTimeout(() => {
      this.navigateToStudentList();
    }, 1100)

  }
  navigateToStudentList() {
    this.router.navigate(['students']);
  }
}
