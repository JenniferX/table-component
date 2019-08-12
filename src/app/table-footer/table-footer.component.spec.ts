import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TableFooterComponent } from './table-footer.component';
import { compileComponent } from '@angular/core/src/render3/jit/directive';

describe('TableFooterComponent', () => {
  let component: TableFooterComponent;
  let fixture: ComponentFixture<TableFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFooterComponent);
    component = fixture.componentInstance;
    component.totalPageCount = 5;
    component.totalPagesCount = [1, 2 , 3 , 4 , 5];
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 7 in length', () => {
    const changes = {
      totalPageCount: {
        currentValue: 7,
        previousValue: 0,
        firstChange: false,
        isFirstChange() {return false; }
      }
    };
    component.ngOnChanges(changes);
    expect(component.totalPagesCount.length).toBe(7);
  });

  it('should select 5 as index', () => {
    component.isSelect(5);
    expect(component.selected).toEqual(5);
  });


});
