import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {



  constructor() { }
  

  
  // registering a service in service.ts file
  getEmployee() {
    return [
     {"id":1, "name":"john", "age":30},
     {"id":2, "name":"alex", "age":32},
     {"id":3, "name":"ryan", "age":23},
     {"id":4, "name":"jason", "age":35},
     {"id":5, "name":"peter", "age":31},
    ];
  }

}
