import { Component, OnInit } from '@angular/core';
import { DataServiceService } from './../../service/data-service.service';

@Component({
  selector: 'app-tutor-list',
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.scss']
})
export class TutorListComponent implements OnInit {

  public tutors = [];
  constructor(private dataService:DataServiceService) { }

  ngOnInit(): void {

    this.dataService.getTutors().subscribe(data => {
      console.log(data);
      

      this.tutors = data['tutors'];
    }
    );

  }

}
