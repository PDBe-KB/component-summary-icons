import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {SummaryIcons} from './summary-icon/summary-icon.models';
import {SummaryIconComponent} from './summary-icon/summary-icon.component';
import {SuperposeComponent} from './superpose/superpose.component';
import {DownloadComponent} from './download/download.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        SummaryIconComponent,
        SuperposeComponent,
        DownloadComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
