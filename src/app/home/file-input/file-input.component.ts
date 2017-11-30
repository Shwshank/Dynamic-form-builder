import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styleUrls: ['./file-input.component.css']
})
export class FileInputComponent implements OnInit {

  formData = new FormData();;
  files: any;
  selectedValue: any;
  @Input() id: string;
  @Input() name: string;
  @Input() accept: any;
  @Input() fileName: any;
  @Output() jsonData = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  getVal($event) {

    console.log('1');
    this.formData.delete('file');
    this.files = $event.target.files || $event.srcElement.files;
    let file = this.files[0];
    let fileName = file.name;
    this.formData = new FormData();
    this.formData.append('file', file);
    console.log(this.formData);
    this.jsonData.emit({ 'id':this.id, 'name':this.name, 'value':this.formData, 'fileName':fileName});

  }

}
