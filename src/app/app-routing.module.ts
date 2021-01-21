import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';
import { TestComponent } from './test/test.component';

// here we provide paths to our components in the form of objects in the routes array
const routes: Routes = [
  // the top route is for handling the empty path i.e localhost:4200
  {path: '', redirectTo: '/employeedetails', pathMatch: 'full'},
  {path: 'test', component: TestComponent},
  {path: 'employeedetails', component: EmployeedetailsComponent},
  {path: 'studentdetails', component: StudentdetailsComponent},
  {path: 'department-list', component:DepartmentListComponent},
  // after selecting any department, we want to print it's id
  {path: 'department-list/:id', component: DepartmentDetailsComponent},
  
  // wildcard routing for PAGE NOT FOUND => Incorrect url
  {path: '**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// We can directly import "routingcomponents" along with Approutingmodule in app module.ts, but
// since all the code is used here, I'm not removing any imports. This is done to remove redundancy and
// preventing importing the same components once in the appmodule and then here in this file.  
export const routingcomponents = [TestComponent, EmployeedetailsComponent, StudentdetailsComponent]
