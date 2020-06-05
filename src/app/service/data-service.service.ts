import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private httpClient: HttpClient) { }

  getCourses() {
    return this.httpClient.get('/assets/data/courses.json');
  }
  getTutors() {
    return this.httpClient.get('/assets/data/tutors.json');
  }
}
