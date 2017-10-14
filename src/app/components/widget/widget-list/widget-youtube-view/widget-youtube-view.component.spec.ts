import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetYoutubeViewComponent } from './widget-youtube-view.component';

describe('WidgetYoutubeViewComponent', () => {
  let component: WidgetYoutubeViewComponent;
  let fixture: ComponentFixture<WidgetYoutubeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetYoutubeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetYoutubeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
