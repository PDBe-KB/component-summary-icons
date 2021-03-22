import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryIconComponent } from './summary-icon.component';
import { DownloadComponent } from '../download/download.component';
import { SuperposeComponent } from '../superpose/superpose.component';



describe('SummaryIconComponent', () => {
  let component: SummaryIconComponent;
  let fixture: ComponentFixture<SummaryIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryIconComponent, DownloadComponent, SuperposeComponent, DownloadComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryIconComponent);
    component = fixture.componentInstance;
    component.scrollToId = function (x: any) {};
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  // it('getSuperposeData() should work', () => {
  //   component.accession = 'foo';
  //   expect(component.getSuperposeData()).toEqual({accession: 'foo', segment: 1});
  // });

});
