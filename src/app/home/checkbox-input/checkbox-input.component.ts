import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-checkbox-input',
  templateUrl: './checkbox-input.component.html',
  styleUrls: ['./checkbox-input.component.css']
})
export class CheckboxInputComponent implements OnInit {

  selectedValue: any;
  resultArray: any = [];
  @Input() id: string;
  @Input() name: string;
  @Input() option: any;
  @Input() value: any;
  @Output() jsonData = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
    this.resultArray= this.value;
    // console.log(this.resultArray);
  }

  checkVal(opt) {
    let flg = false;

    for(let j=0; j<this.value.length; j++) {
      if(opt == this.value[j]) {
          flg = true;
      }
    }

    if(flg) {
      return true;
    } else {
      return false;
    }

  }

  getVal(flag, opt) {
    let temp = 0;
    let pos = 0;
    if(flag) {

      for(let i=0; i<= this.resultArray.length; i++) {
        if(this.resultArray[i] == opt) {
          temp = 1;
        }
      }

      if(temp == 0) {
        this.resultArray.push(opt);
      }

      // console.log(this.resultArray);
    } else {

      for(let i=0; i<= this.resultArray.length; i++) {
        if(this.resultArray[i] == opt) {
          pos = i;
          break;
        }
      }

      this.resultArray.splice(pos,1);
      // console.log(this.resultArray);
    }

    this.jsonData.emit({ 'id': this.id, 'name':this.name, 'option': this.option, 'value':this.resultArray,  });

  }

}
