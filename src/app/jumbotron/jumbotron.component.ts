import { Component} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent {

private jbtHeading:string;
private jbtText:string;
private jbtBtnText:string;
private jbtBtnUrl:string;
constructor(){
  this.jbtHeading="HelloWorld";
  this.jbtText="This is a simple Website";
  this.jbtBtnText="Read More";
  this.jbtBtnUrl="/about";
}
}
