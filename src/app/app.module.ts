import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { NewserviceService } from './newservice.service';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentService } from './student.service';
import { StudentdetailsComponent } from './studentdetails/studentdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EmployeedetailsComponent,
    StudentdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    NewserviceService,
    StudentService,          
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
