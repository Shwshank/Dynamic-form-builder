import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-input',
  templateUrl: './slider-input.component.html',
  styleUrls: ['./slider-input.component.css']
})
export class SliderInputComponent implements OnInit {

  updatedData : EventEmitter<any> = new EventEmitter<any>();

  val:any;
  @Input() id: string;
  @Input() name: string;
  @Input() value: any;
  @Input() min: any;
  @Input() max: any;
  @Output() jsonData = new EventEmitter<any>();

  @ViewChild('val') output;
  constructor() {}

  ngOnInit() {
    this.val = this.value;
  }

  getVal() {
    // console.log(this.output.nativeElement.value);
    let v;
    v = this.output.nativeElement.value;
    this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value': v, 'min':this.min, 'max':this.max});
  }

}
