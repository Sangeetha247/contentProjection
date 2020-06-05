import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../service/data-service.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  public courses = [];

  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {

    
    this.dataService.getCourses().subscribe(data => {
      console.log(data);
      const coursesResp = data;

      this.courses = coursesResp['courses'];
    }
    );

  }

}
