import { Component, OnInit, Output, Input } from '@angular/core';
import { PopulateDataService } from '../populate-data.service';
import { TableData } from '../common/tableData';

@Component({
  selector: 'app-details-table',
  templateUrl: './details-table.component.html',
  styleUrls: ['./details-table.component.css']
})
export class DetailsTableComponent implements OnInit {

  columns = ["DATE","CAMPAGIAN","VIEW","ACTIONS"," "," "," "]
  index = ["name","region","createdOn","csv","report","image_url"]
  dataTable:any;
  datas: TableData[] = [];
  @Input() campClicked;
  
  constructor(private populateData:PopulateDataService) { }

  ngOnInit() {
    this.populateData.getTableData()
    .subscribe((response)=> {
      this.dataTable = response;
      this.datas = this.dataTable.data;
    },
    (error)=>{console.log(error);
    })
    if (this.campClicked === "uc") {
      console.log(this.campClicked);
      
    }
  }
  // selectDate(e:any) {
  //   console.log(e.target.value);
    
  // }


}
