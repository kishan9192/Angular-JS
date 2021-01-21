import { parseTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';


@Component({
  selector: 'app-department-details',
  template: `
    <p>
      You selected the department with department id = {{departmentId}}
      <a (click) = "goPrevious()">Previous</a>
      <a (click) = "goNext()">Next</a>
      <a (click) = "gotoDepartments()">Back</a>
    </p>
  `,
  styles: [
  ]
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }

  public departmentId:number = 0;


  /*
    On ngOnInit method we read the route parameter. We have access to route service
    route service gives us a snapshot of the current route. 
    from this snapshot we use paramMap api which helps us to get the parameters from the URL
    and here the parameter is Id. Therefore fetching the id from snapshot. 
    

    For this to work we need to import ActivatedRoute from '@angular/router'
  */
  ngOnInit(): void {

    /*  PROBLEM WITH SNAPSHOT APPROACH  
      when we are using the previous and next anchor tags in department details component,
      then the below mentioned code doesn't work. It just changes the Id in the uRL, but the problem is
      that Angular doesn't initialize the component again if we follow this method.
      Therefore it never comes to this OnInit method again after we have initialized it once. Therefore use
      the ParamMaps.subscribe method 
    */
  
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
  
  
      this.route.paramMap.subscribe((params : ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
      /*paramMap observable is used above. We use instance of Activated Route i.e "route"
        and then we call the paramMap method, which returns an observable which we only get if we subscribe to it
        Subscribe function takes an arrow function. Observable provides us with parameters
        which we strong type to ParamMap, and params above is an instance of ParamMap 

        The paramMap api provides us with a get method to retrieve the id parameter. 
        Set the department id and enjoy.
      */
  }

  goPrevious() {
    let previousId = this.departmentId-1;
    //Once we have the previous Id we pass this id to the navigate method of the router service.
    // we use this router service when we want to add routes in our code.
    this.router.navigate(['/department-list', previousId]);

  }

  goNext() {
    let nextId = this.departmentId+1;
    this.router.navigate(['/department-list', nextId]);
  }


  // Optional Routing Parameters come into picture here. 
  gotoDepartments() {
      this.router.navigate(['/department-list', {id: this.departmentId}]);
  }
}
