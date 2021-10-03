import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding-properties',
  templateUrl: './databinding-properties.component.html',
  styleUrls: ['./databinding-properties.component.scss']
})
export class DatabindingPropertiesComponent implements OnInit {
public name = "Trương An Huy";
public name2 = "Trương Thế Hưng";
public age = 20;

public resetname():void {
 console.log('resetname');
 this.name = ''; 
}
  constructor() { }

  ngOnInit(): void {
  }

}
