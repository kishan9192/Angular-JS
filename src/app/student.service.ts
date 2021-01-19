import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudent } from './studentarrayschema';
import { Observable } from 'rxjs';

// for catching the error/exception
import { catchError } from 'rxjs/operators';
// for throwing error
import { throwError } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private stringurl = "/assets/data/studentdetails.json";

  // We are using http for serving the files from a url
  // for hardcoded dependency injection" look into employeedetails 
  // check newservice.service.ts for hardcoded values of employees
  constructor(private http: HttpClient) { }
  
  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(this.stringurl).pipe(catchError(this.erroHandler));
  }

  erroHandler(error: HttpErrorResponse) {
    return throwError(error.message || 'server Error');
  }
}
