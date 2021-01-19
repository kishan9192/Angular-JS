import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-employeedetails',
  template: `
              <h1>EMPLOYEE DETAILS COMPONENT : DEPENDENCY INJECTION</h1>
              <ul *ngFor = "let i of employee">
              <li>{{i.id}}-{{i.name}}</li>
              </ul>`,
  styleUrls: ['./employeedetails.component.css']
})


export class EmployeedetailsComponent implements OnInit {


  // Dependency Injection. We are creating an object of service class
  // Service will provide us the dependencies. i.e. Employee array here
  // We need to register the service in the app.module so that it is reachable to everymodule of our app
  constructor(public employeedetail : NewserviceService) { }


  public employee:any = [];
  
  // This OnInit function is used for initializing the local employee array with the one that is being fetched from 
  // service class's object (employeedetail)
  
  /* Here we are using HTTP request to fetch the employee details from a URL
     WE will be getting observables in response
  
     we need to cast the observables into usable form. HEre we need the employee array data: therefore cast it into
     that form. Therefore we create an interface "employee.ts" where we provide the type details of each field in array

     and cast that interface here. so that the observable is usable
  */ 
  ngOnInit(): void {
    this.employee = this.employeedetail.getEmployee();
  }

}
