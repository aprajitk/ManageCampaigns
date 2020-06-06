import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TableData } from './common/tableData';

@Injectable({
  providedIn: 'root'
})
export class PopulateDataService {
url: string = '../../assets/data.json';
  constructor(private http : HttpClient) { }
  getTableData()
  {
    return this.http.get<TableData>(this.url);
  }
}
