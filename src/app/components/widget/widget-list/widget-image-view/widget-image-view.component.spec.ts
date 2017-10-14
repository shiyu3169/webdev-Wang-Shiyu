import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetImageViewComponent } from './widget-image-view.component';

describe('WidgetImageViewComponent', () => {
  let component: WidgetImageViewComponent;
  let fixture: ComponentFixture<WidgetImageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetImageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetImageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
