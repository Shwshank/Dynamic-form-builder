import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-radio-input',
  templateUrl: './radio-input.component.html',
  styleUrls: ['./radio-input.component.css']
})
export class RadioInputComponent implements OnInit {

  selectedValue: any;
  @Input() id: string;
  @Input() name: string;
  @Input() option: any;
  @Input() value: any;
  @Output() jsonData = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  getVal(opt) {
    console.log(opt);
    this.jsonData.emit({ 'id': this.id, 'name':this.name, 'option':this.option, 'value':opt, });

  }

}
