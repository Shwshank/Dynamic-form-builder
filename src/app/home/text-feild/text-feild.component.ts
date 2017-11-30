import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-text-feild',
  templateUrl: './text-feild.component.html',
  styleUrls: ['./text-feild.component.css']
})
export class TextFeildComponent implements OnInit {

  updatedData : EventEmitter<any> = new EventEmitter<any>();
  text= '';
  @Input() id: string;
  @Input() name: string;
  @Input() value: string;
  @Output() jsonData = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.text = this.value;
  }

  getVal() {
    // console.log(this.text);
    this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.text, });
  }

}
