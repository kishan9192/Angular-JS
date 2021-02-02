import { InterpolationConfig } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  

export class AppComponent {

    // Sending data to child (test) component
    public name = "PARENT to CHILD COMPONENT INTERACTION";
}
