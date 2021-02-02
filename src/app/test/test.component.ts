import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { NewserviceService } from '../newservice.service';

@Component({
  selector: 'app-test',
  template: `
            <h2>{{"Welcome " + name + " !" }}</h2>
            <h2>{{2 + 2}}</h2>
            <h2>{{"This website's address is " + address}}</h2>
            <input type = "text" [id] = "myId">
            <input type = "text" [disabled] = "isDisabled">
            <h2 class = "text-special">Angular Project</h2>
            <h2 class = "text-success">Text success</h2>
            <h2 class = "text-error">Text error</h2>

            
            <h2 [class.text-error] = "hasError">Conditional Property Binding</h2>
            
            <h2 [ngClass] = "messageClasses">Angular Project</h2>

            
            <h2 [style.color] = "'orange'"> Style Binding 1</h2>
            <h2 [style.color] = "hasError ? 'red' : 'blue'"> Conditional hasError (Style Binding)</h2>
            <h2 style = "color: turquoise; font-weight: bold; font-style: italic; font-family: 'Lucida Console', 'Courier New', 'monospace'"> Static Inline Style </h2>
            <h2 [ngStyle] = "titleStyle"> NgStyle Directive (When we want to apply multiple styles eksath)</h2>
            
            <button (click) = "onclick()">Event Binding/ Event Listener</button>{{buttonmessage}}
            <br>
            <button (click) = "ClickMethod($event)"> Displays event information </button> {{typeofevent}}
            
            <input type = "text" #myEvent placeholder = "Enter text" >
            <button (click) = "logmessage(myEvent)">log</button> {{inputmessage}}
            
            
            <input type = "text" [(ngModel)]="name"> {{name}}

            <h2>Sending ParentData to child => {{parentData}}</h2>

            <button (click)="fireevent()"> Fire an event for child to parent ComponentInteraction</button>

            <ul *ngFor = "let i of employee">
               <li>{{i.name}}.{{i.id}}-{{i.age  }}</li>

            </ul>
            `,

  styles: [`
    .text-special {
      font-style: italic;
      font-family: "Lucida Console", "Courier New", monospace;
      color: grey;
    }
    .text-success {
      color: green;
    }
    .text-error {
      color: red;
      font-weight: bold;
    }
  `]
})
export class TestComponent implements OnInit {

  constructor(public _employeetest : NewserviceService) { }

  public employee:any = []; 
  public isVisible = false; 
  // This lifecycle hook method is called when the component is initialized. 
  ngOnInit() {
    // this loc is for dependency injection
    this.employee = this._employeetest.getEmployee();    
  }

  
  public name = "";
  public myId = "testID";


  // when isDisabled is set to true, second input field is disabled because it is binded to this property
  public isDisabled = true;

  public address = window.location.href;

  public hasError = true;


  // using ng class directive for class binding
  public special = true;
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-error": this.hasError,
    "text-special": this.special
  }

  //ngStyle directive for multiple style binding
  public titleStyle = {
    color: "blue",
    fontStyle: "italic"
  } 


  public buttonmessage = "";
  //  Click Event handler function "onClick()"
  
  onclick() {
    console.log("Click event handled by method or event handler = onClick()");
    this.buttonmessage= "click event triggered";
  }

  public typeofevent = "";
  ClickMethod(event: any) {
    console.log(event);
    this.typeofevent = event.type;

  }

  public inputmessage = "";
  public logmessage(element:any) {
    this.inputmessage = element.value;
  }

  // Component Interaction. Value from parent to child
  // parent -> app component. child -> test component
  @Input() public parentData: any;
  

  // Component Interaction : output from child to parent using fireevent
  @Output() public childEvent = new EventEmitter();

  fireevent() {
    this.childEvent.emit("Component Interaction Child to parent using EventEmitter");
  }

}  
