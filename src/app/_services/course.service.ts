import { Injectable } from '@angular/core';

export interface Course {

}



@Injectable({
  providedIn: 'root'
})
export class CourseService {


  courses = [
    {
      "id": 1,
      "name": "course 1",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 12,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    },
    {
      "id": 2,
      "name": "course 2",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 44,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    },
    {
      "id": 3,
      "name": "course 3",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 12,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    },
    {
      "id": 4,
      "name": "course 5",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 44,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    },
    {
      "id": 5,
      "name": "course 5",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 12,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    },
    {
      "id": 6,
      "name": "course 6",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 44,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    },
    {
      "id": 7,
      "name": "course 7",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 12,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    },
    {
      "id": 8,
      "name": "course 8",
      "author": "Lorem 1",
      "numberOfSeats": 40,
      "numberOfSeatsFilledPositions": 44,
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestias corrupti sint, ! Omnis."
    }

  ]


  constructor() { }



  findAllCourses() {
    return this.courses;
  }


  findCourseByCourseId(id: number): Course {
    return this.courses.map(course => course.id === id);
  }

  getCousesIfSeatesAvaliable() {

    let courses = this.courses.filter(function (course) {
      console.log("🚀 ~ file: course.service.ts ~ line 68 ~ CourseService ~ course", (course.numberOfSeats - course.numberOfSeatsFilledPositions) > 0)
      return (course.numberOfSeats - course.numberOfSeatsFilledPositions) > 0;
    })
    return courses;

  }

  updateCourse(courses: any) {
    console.log("🚀 ~ file: course.service.ts ~ line 108 ~ CourseService ~ updateCourse ~ course", courses)
  }

}
