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

  it('getSuperposeData() should work', () => {
    component.accession = 'foo';
    const expected = {
      'accession': 'foo',
      'superposition': true,
      'superpositionParams': {
        'segment': 1
      }
    };
    expect(component.getSuperposeData()).toEqual(expected);
  });

  it('getSuperposeData() should work with ligand view', () => {
    component.accession = 'foo';
    const expected = {
      'accession': 'foo',
      'superposition': true,
      'superpositionParams': {
        'segment': 1,
        'ligandView': true,
        'superposeAll': true
      }
    };
    expect(component.getSuperposeData(true)).toEqual(expected);
  });

  it('getSuperposeData() should work with parent accession', () => {
    component.accession = 'foo';
    component.parentAccession = 'bar';
    const expected = {
      'accession': 'foo',
      'superposition': true,
      'superpositionParams': {
        'segment': 1,
        'matrixAccession': 'bar'
      }
    };
    expect(component.getSuperposeData()).toEqual(expected);
  });

  it('scrollToId() should not fail', () => {
    expect(component.scrollToId('main')).toBeFalsy();
  });

});
