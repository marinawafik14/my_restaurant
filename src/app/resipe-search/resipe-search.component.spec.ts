import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResipeSearchComponent } from './resipe-search.component';

describe('ResipeSearchComponent', () => {
  let component: ResipeSearchComponent;
  let fixture: ComponentFixture<ResipeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResipeSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResipeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
