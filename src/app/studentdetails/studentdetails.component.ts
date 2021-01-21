import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-studentdetails',
  template: `<h2>{{errormessage}}</h2>
              <div *ngFor = "let i of students">
                <h6>Jersy Number: {{i.id}}  |  Name = {{i.name}} | Score = {{i.score}}</h6>
              </div>
              <button (click) = "fireanevent()"> New Event </button>{{message}}
              `,
  styleUrls: ['./studentdetails.component.css']
})


export class StudentdetailsComponent implements OnInit {

  public errormessage = "";
  public students:any =[];
  constructor(public studentobject:StudentService) { }
  

  ngOnInit(): void {
      this.studentobject.getStudents()
          .subscribe(data => this.students = data,
                      error => this.errormessage = error);
  }
  
  public message = "";

  fireanevent() {
    this.message = "Click event triggered!!";
  }

}
