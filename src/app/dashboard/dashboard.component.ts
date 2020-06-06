import { Component, OnInit, ViewChild } from '@angular/core';
import { DetailsTableComponent } from '../details-table/details-table.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  campClick: string;
  constructor() { }

  ngOnInit() {
  }
  campaigns(campaigns) {
    switch (campaigns) {
      case 'uc':
        this.campClick = "uc";
        break;
      case 'lc':
        this.campClick = "lc";
        break;
      case 'pc':
        this.campClick = "pc";
        break;
    }
  }

}
