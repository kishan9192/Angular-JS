import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-list',
  template: `
    <h3> DEPARTMENT LIST </h3>
    <ul class = "items">
      <li (click) = "onSelect(i)" [class.selected] = "isSelected(i)" *ngFor = "let i of departments">
        <span class = "badge"> {{i.id}}</span> {{i.name}}
      </li>
    </ul>
  `,
  styles: [
  ]
})

export class DepartmentListComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  public selectedId:any = 0;
  public departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Spring"},
    {"id": 3, "name": "C++"},
    {"id": 4, "name": "Python"},
    {"id": 5, "name": "Java"},  
  ]

  ngOnInit(): void {
      this.route.paramMap.subscribe((params:ParamMap) => {
        let id = parseInt(params.get('id'));
        this.selectedId = id;
      })
  }

  //Router module has a navigate method that takes the "Route parameters"
  // parameters are the url that we want to navigate to, and the id, because
  // we are going to /department-list/:id for rendering department details component.
  
  onSelect(i: any) {
    // This is absolute routing. Anytime if our url changes
      this.router.navigate(['/department-list', i.id]);
  }
  

  isSelected(i:any) {
      return i.id === this.selectedId;
  }
  
}

