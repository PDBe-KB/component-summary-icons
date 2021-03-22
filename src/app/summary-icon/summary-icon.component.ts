import {Component, Input} from '@angular/core';
import {SummaryIcons} from './summary-icon.models';

@Component({
  selector: 'app-summary-icon',
  templateUrl: './summary-icon.component.html',
  styleUrls: ['./summary-icon.component.css']
})
export class SummaryIconComponent {

  @Input() data: SummaryIcons[];
  @Input() downloadModalData: any;
  @Input() accession: any;
  @Input() hasSuperposition: boolean;
  @Input() parentAccession: any;

  getSuperposeData(ligandView?: boolean) {
    /*
     * Get data to be passed to the superpose component
     *
     * @returns an object for superpose component
     */

    const superposeData = {
      accession: this.accession,
      superposition: true,
      superpositionParams: {segment: 1}
    };
    if (ligandView) {
      superposeData.superpositionParams['ligandView'] = true;
      superposeData.superpositionParams['superposeAll'] = true;
    }
    if (this.parentAccession) {
      superposeData.superpositionParams['matrixAccession'] = this.parentAccession;
    }
    return superposeData;
  }

  scrollToId(id: string) {
    /*
     * Scroll the window to a div based on the id
     *
     * @param id - A <div> id
     */
    document.getElementById(id).scrollIntoView(true);
  }
}
