import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value = true;
  jsonArray = [

    {'type':'text', 'name':'text input ', 'id': '121' , 'value':''},
    {'type':'select',   'name':'select input ',   'id': '122', 'option':['opt1','opt2'], 'value':['opt1']} ,
    {'type':'radio',    'name':'radio input ',    'id': '123', 'option':['opt1','opt2'], 'value':'opt2'} ,
    {'type':'checkbox', 'name':'checkbox input ', 'id': '124', 'option':['opt1','opt2','opt3'], 'value':['opt1','opt3']} ,
    {'type':'file-input', 'name':'csv & png input', 'id': '125', 'accept':['.csv','.png'], 'fileName':''},
    {'type':'current-location', 'name':'Current location', 'id': '126',},
    {'type':'slider', 'name':'slider ', 'id': '127' , 'value':'50', 'min':'0', 'max':'60'},

  ];

  act_data=[];
  flag = 0;
  pos = 0;
  // act_data=[{id:'',name:'',value:''}];

  constructor() { }

  ngOnInit() {
  }

  jsonData(data: any) {
    this.flag = 0;
    this.pos = 0;
    // console.log(data.id);

    for(let i =0; i <(this.act_data.length); i++) {

      if (this.act_data[i].id === data.id) {
        this.flag = 1;
        this.pos = i;
        // console.log('Id Match at position '+i);
        break;

      }
    }

    if(this.flag == 1) {
        this.act_data[this.pos].value = data.value;
        // console.log('updated at '+this.pos);
        // console.log(this.act_data);

    }
    if(this.flag == 0) {
      this.act_data.push(data);
      // console.log('inserted');
      // console.log(this.act_data);

    }
    console.log(this.act_data);
    localStorage.setItem('actual_data',JSON.stringify(this.act_data));

  }

}
