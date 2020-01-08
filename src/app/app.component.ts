import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myInput;
  showIt = false;

   get rapidPageValue () {
    return JSON.stringify(this.myInput, null, 2);
  }

  set rapidPageValue (v) {
    try{
    this.myInput = JSON.parse(v);}
    catch(e) {
      console.log('error occored while you were typing the JSON');
    };
  }
  obj = [{"test": "testttt","name": "nameeee"}];
}
