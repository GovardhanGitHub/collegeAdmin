import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { CoursesComponent } from './courses/courses.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component:HomeComponent},
  {path: 'courses', component:CoursesComponent},
  {path: 'students', component:StudentsComponent},
  {path: 'addStudent', component:AddStudentComponent},

  {path: 'students/editStudent/:id', component:EditStudentComponent},


  {path: '**', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
