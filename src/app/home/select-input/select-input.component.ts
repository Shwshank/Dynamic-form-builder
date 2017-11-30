import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.css']
})
export class SelectInputComponent implements OnInit {

  selectedValue: any;
  @Input() id: string;
  @Input() name: string;
  @Input() option: any;
  @Input() value: any;
  @Output() jsonData = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    // console.log(this.selected[0]);
    this.selectedValue = this.value[0];
  }

  getVal() {
    this.jsonData.emit({ 'id': this.id, 'name':this.name, 'optoin':this.option , 'value':this.selectedValue, });
  }


}
