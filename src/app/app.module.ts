import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { StudentsComponent } from './students/students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { AddStudentComponent } from './add-student/add-student.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastContainerComponent } from './toast-container/toast-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CoursesComponent,
    HomeComponent,
    StudentsComponent,
    EditStudentComponent,
    AddStudentComponent,
    ToastContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
