import { Component } from '@angular/core';
declare var require: any;

@Component({
  selector: 'task1',
  templateUrl: './task1.template.html',
  styleUrls: ['./task1.style.scss']
})
export class Task1Component {
  omegaLogo = require('../../../assets/img/04_crop.png');
  target = require('../../../assets/targets/task1.png');

  mockData = [];

  showPreview = false;

  loadData(){
    //TODO load mockData
  }

  filterArray(event) {
    //TODO filter data by column inputs
  }
}
