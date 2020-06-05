import { Component, OnInit, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
  providers: [TitleCasePipe]
})
export class CourseCardComponent implements OnInit {
  @Input() course;

  constructor(private titleCasePipe:TitleCasePipe) { }

  ngOnInit(): void {

    this.titleCasePipe.transform(this.course.name);

    // this.dataService.getCourses().subscribe(data => {
    //   console.log(data);
    //   const coursesResp = data;

    //   this.courses = coursesResp['courses'];
    //   this.courseObj = this.courses[0];
    // }
    // );

  }

}
