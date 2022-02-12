import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableListComponent } from './table-list.component';

describe('ListTableComponent', () => {
  let component: TableListComponent;
  let fixture: ComponentFixture<TableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render list in table', () => {
    const fixture = TestBed.createComponent(TableListComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.table tbody')?.children.length).toEqual(0);
  });

});
