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
    // get whole table data
    this.httpService.getServiceRequest('getTableData').subscribe((data) => {
      this.tableData = data;
      this.selectionChange(this.selectedOption);
      this.setTableHeaderCol(data);
    });
  }

  setTableHeaderCol(data) {
    this.tableHeaderCol = [];
    // set table head name
    Object.keys(data[0]).forEach(element => {
      this.tableHeaderCol.push({
        id: element,
        name: element.replace(/_/g, ' ').toUpperCase()
      });
    });
  }

  setTableConfig(selectOption, offset) {
    // display the table from start index to end index depends on the seleciton of pagination.
    this.startItemPerPage =  offset * selectOption;
    this.endItemPerPage = this.startItemPerPage + selectOption;
    this.displayCurrentTableData = this.tableData.slice(this.startItemPerPage , this.endItemPerPage);
  }

  selectionChange(selectedOption) {
    // when selection of item per page is changed, recalculate the first index and last index of view
    this.selectedOption = parseInt( selectedOption, 10 );
    this.setTableConfig(this.selectedOption, this.offset);
    this.totalPageCount = Math.ceil(this.tableData.length / this.selectedOption);
  }

  setOffset(item) {
    // offset base on the selection of pagination
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
