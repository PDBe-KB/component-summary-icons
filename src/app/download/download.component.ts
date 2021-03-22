import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-download',
  template: '<html></html>',
  styles: ['']
})
export class DownloadComponent {
  @Input() downloadModalData: any;
  @Input() type: string;
}
