import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-location-input',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.css']
})
export class LocationInputComponent implements OnInit {

  location: any;
  @Input() id: string;
  @Input() name: string;
  @Input() option: any;
  @Output() jsonData = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  getVal() {

    if(window.navigator.geolocation){
      window.navigator.geolocation.getCurrentPosition(position => {
        this.location = position.coords;
        console.log(position.coords);
        this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':position.coords, });
      });
   }

  }

}
