import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryListPageComponent } from './library-list-page.component';

describe('LibraryListPageComponent', () => {
  let component: LibraryListPageComponent;
  let fixture: ComponentFixture<LibraryListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
