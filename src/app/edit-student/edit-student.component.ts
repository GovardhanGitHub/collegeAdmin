import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';
import { CourseService } from '../_services/course.service';
import { StudentService } from '../_services/student.service';
import { ToastService } from '../_services/toast.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {

  id: any;
  student: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings = {};
  courses: any;
  studentName: any;


  constructor(private activatedRoute: ActivatedRoute, private router: Router, public toastService: ToastService,
    private formBuilder: FormBuilder, private courseService: CourseService, private studentService: StudentService) { }



  ngOnInit(): void {

    this.createForm();
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getStudent(this.id);
    this.listcousers();



    this.dropdownSettings = {
      idField: "name",
      textField: "name",
      singleSelection: false,
      itemsShowLimit: 2,
      enableCheckAll: false,
      limitSelection: 2
    };
  }


  listcousers() {
    this.courses = this.courseService.getCousesIfSeatesAvaliable();
    console.log("🚀 ~ file: edit-student.component.ts ~ line 32 ~ EditStudentComponent ~ listcousers ~ courses", this.courses)

  }

  studentForm: any;
  private createForm(): void {
    this.studentForm = this.formBuilder.group({
      name: new FormControl(''),
      courses: new FormControl('')
    });
  }



  getStudent(id: number) {
    this.student = this.studentService.findStudent(id);
    this.studentForm.controls.name.setValue(this.student.name);

  }


  updateStudent() {
    console.log(this.studentForm.value);
    this.showSuccess()
    this.studentService.UpdateStudent(this.studentForm.value);

    setTimeout(() => {
      this.navigateToStudentList();
    }, 1000)



  }




  navigateToStudentList() {
    this.router.navigate(['students']);
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }


  showSuccess() {
    this.toastService.show('successfully courses were added to this Student', { classname: 'bg-success text-light', delay: 500 });
  }



}
