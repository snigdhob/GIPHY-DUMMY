import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingGifsComponent } from './trending-gifs.component';

describe('TrendingGifsComponent', () => {
  let component: TrendingGifsComponent;
  let fixture: ComponentFixture<TrendingGifsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingGifsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingGifsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
