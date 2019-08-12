import { Component, OnInit } from '@angular/core';
import { HttpClientService } from './../core/http-client-service/http-client.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {
  tableData;
  tableHeaderCol: Array<{name: string, id: string}>;
  selectedOption = 25;
  startItemPerPage: number;
  endItemPerPage: number;
  displayCurrentTableData;
  totalPageCount;
  offset = 0;
  constructor(public httpService: HttpClientService) {
  }
  ngOnInit() {
    this.startItemPerPage = 0;
    this.getTableData();
  }
  getTableData() {
    this.httpService.getServiceRequest('getTableData').subscribe((data) => {
      this.tableData = data;
      this.selectionChange(this.selectedOption);
      this.setTableHeaderCol(data);
    });
  }

  setTableHeaderCol(data) {
    this.tableHeaderCol = [];
    Object.keys(data[0]).forEach(element => {
      this.tableHeaderCol.push({
        id: element,
        name: element.replace(/_/g, ' ').toUpperCase()
      });
    });
  }

  setTableConfig(selectOption, offset) {
    this.startItemPerPage =  offset * selectOption;
    this.endItemPerPage = this.startItemPerPage + selectOption;
    this.displayCurrentTableData = this.tableData.slice(this.startItemPerPage , this.endItemPerPage);
  }

  selectionChange(selectedOption) {
    this.selectedOption = parseInt( selectedOption, 10 );
    this.setTableConfig(this.selectedOption, this.offset);
    this.totalPageCount = Math.ceil(this.tableData.length / this.selectedOption);
  }

  setOffset(item) {
    this.setTableConfig(this.selectedOption, item.offset);
  }

  submit(row) {
    const params = {
      id: row.id,
      status: row.status
    };
    this.httpService.postServiceRequest('submitData', params ).subscribe(res => {
      alert(`Submit Successfully\nid : ${row.id}\nstatus: ${row.status}`);
    });
  }
}
