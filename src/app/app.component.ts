import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'myApp';
  myName:string;
  color='orange';
  condition=true;

  constructor(){
this.myName="XYZ";
  }
  name: string;
  age : number;
  


}
