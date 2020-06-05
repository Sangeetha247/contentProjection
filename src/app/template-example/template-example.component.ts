import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-example',
  templateUrl: './template-example.component.html',
  styleUrls: ['./template-example.component.scss']
})
export class TemplateExampleComponent implements OnInit {
  public shouldSayHello = true;
  public items = [{id:1, name:"item1"},
  {id:2,name:"item2"},
  {name:"item2"}];
  public imgUrl = "../../assets/images/man-avatar.png";
  constructor() { }

  ngOnInit(): void {
  }

}
