import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.sass']
})
export class TableFooterComponent implements OnInit, OnChanges {
 @Input() totalPageCount;
 @Output() paginationChange = new EventEmitter();
 totalPagesCount: number[];
 selected = 0;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.totalPagesCount = [];
    this.selected = 0;
    if (changes.totalPageCount) {
      const length = changes.totalPageCount.currentValue;
      for (let i = 0; i < length; i++) {
        this.totalPagesCount.push(i);
      }
    }
  }
  isSelect(index) {
    this.selected = index;
    this.paginationChange.emit({offset: index});
  }

}
