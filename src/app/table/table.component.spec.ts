import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TableComponent} from './table.component';
import {HttpClientService} from './../core/http-client-service/http-client.service';
import {TableFooterComponent} from './../table-footer/table-footer.component';
import {FormsModule} from '@angular/forms';
import {CoreModule} from 'src/app/core/core.module';
import {throwError as observableThrowError} from 'rxjs';

describe('TableComponent', () => {
  let component: TableComponent;
  let httpService: HttpClientService;
  let fixture: ComponentFixture < TableComponent >;
  const data =  [
    {
    name: 'Nell D. Michael',
    phone: '602-1033',
    email: 'hendrerit.id.ante@placeratvelit.ca',
    company: 'Praesent Eu LLP',
    date_entry: '2017-07-30 23:27:39',
    org_num: '907369 2973',
    address_1: 'P.O. Box 916, 8584 Vestibulum St.',
    city: 'Vitry-sur-Seine',
    zip: '2353',
    geo: '60.77971, 7.98874',
    pan: '4532992507580',
    pin: '7086',
    id: 1,
    status: 'read',
    fee: '$60.99',
    guid: '48653E36-987F-48EC-7382-7F009FF34628',
    date_exit: '2018-11-14 12:37:54',
    date_first: '2018-05-20 01:07:05',
    date_recent: '2019-04-06 23:28:25',
    url: 'https://capco.com/'
    }, {
    name: 'Ciara G. Stanley',
    phone: '1-358-613-2160',
    email: 'natoque.penatibus@facilisisloremtristique.co.uk',
    company: 'Nunc Nulla Vulputate LLP',
    date_entry: '2018-03-25 11:05:22',
    org_num: '987983 1023',
    address_1: 'Ap #700-733 Senectus Rd.',
    city: 'Maule',
    zip: '21911',
    geo: '-47.21116, 22.18684',
    pan: '4024007170167232',
    pin: '6394',
    id: 2,
    status: 'expired',
    fee: '$92.73',
    guid: 'D4CC10B0-5F19-EE33-CCA2-95DBD8E7B21F',
    date_exit: '2018-07-22 19:05:57',
    date_first: '2018-08-02 03:50:35',
    date_recent: '2017-08-12 01:56:58',
    url: 'https://capco.com/'
    }, {
    name: 'Elton B. Ashley',
    phone: '1-149-435-5772',
    email: 'elit@intempuseu.ca',
    company: 'Ut Consulting',
    date_entry: '2018-05-26 02:26:45',
    org_num: '699361 5639',
    address_1: '5619 Aenean Road',
    city: 'Coquimbo',
    zip: 'TB32 0SC',
    geo: '45.90788, -30.58453',
    pan: '4532228764377',
    pin: '2131',
    id: 3,
    status: 'read',
    fee: '$61.56',
    guid: '20EFC5BA-0115-226D-2B47-A60557F0EFA1',
    date_exit: '2018-02-27 03:34:13',
    date_first: '2017-10-28 13:45:44',
    date_recent: '2017-07-12 20:49:22',
    url: 'https://capco.com/'
    }, {
    name: 'Bree L. Shepherd',
    phone: '292-9303',
    email: 'nisi.Mauris@Quisque.net',
    company: 'Molestie Dapibus Industries',
    date_entry: '2018-04-22 10:10:56',
    org_num: '074354 0494',
    address_1: 'P.O. Box 687, 2800 Nec, St.',
    city: 'Welland',
    zip: '6505',
    geo: '-33.00506, 41.89197',
    pan: '4378821072523',
    pin: '9402',
    id: 4,
    status: 'unread',
    fee: '$0.69',
    guid: 'BDC0C08A-5CB5-8D15-E117-73B2C46BF8A4',
    date_exit: '2018-02-01 23:11:33',
    date_first: '2018-10-31 01:36:50',
    date_recent: '2018-02-03 06:21:40',
    url: 'https://capco.com/'
    }
  ];
  let displayTableData = data.slice(2, 4);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TableComponent, TableFooterComponent
      ],
      imports: [FormsModule, CoreModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableComponent);
    httpService = new HttpClientService(null);
    component = new TableComponent(httpService);
    return observableThrowError({error: 'ERROR'});
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has Upper Case Letter as Name', () => {
    component.tableData = data;
    component.setTableHeaderCol(data);
    expect(component.tableHeaderCol[0].name).toBe('NAME');
  });

  it('should contains 20 cols for table header', () => {
    component.tableData = data;
    component.setTableHeaderCol(data);
    expect(component.tableHeaderCol.length).toEqual(20);
  });

  it('should has start index as 2 ', () => {
    component.tableData = data;
    component.setTableConfig(2, 1);
    expect(component.startItemPerPage).toEqual(2);

  });

  it('should has end index as 2 ', () => {
    component.tableData = data;
    component.setTableConfig(2, 1);
    expect(component.endItemPerPage).toEqual(4);
  });

  it('should has display last 2 records of table', () => {
    component.tableData = data;
    component.setTableConfig(2, 1);
    expect(component.displayCurrentTableData).toEqual(displayTableData);
  });

  it('should total page of 2', () => {
    component.tableData = data;
    component.selectionChange(3);
    expect(component.totalPageCount ).toEqual(2);
  });

  it('setOffset in Table component should get called', () => {
    component.tableData = data;
    component.selectedOption = 1;
    const child = new TableFooterComponent();
    child.paginationChange.subscribe((change) => {
      expect(change).toEqual({offset: 2});
    });
    child.isSelect(2);
  });

});
