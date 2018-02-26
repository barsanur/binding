import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']

})
export class TestComponent implements OnInit {

  public name = "Noor Mammadov";
  public date = new Date();
  public successClass = "text-succes";
  public isdisabled = false;
  public hasError = true;
  public hello = "";
  public names = "";
  displayName = true;
  public color = "lime";
  public colors = ["Red","Blue","Green","Orange"]
  logMessage(value){
      // console.log(value);
      alert("Hello "+ value + " !");
  }
  public messageClasses = {
    
   "text-succes": !this.hasError,
   "text-danger": this.hasError,
   "text-special": this.hasError,
     }

      onClick(event){
     console.log(event);
     this.hello = event.type;
      
     }
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "Hello " + this.name;
  }

}
