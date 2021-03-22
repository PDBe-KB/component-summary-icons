import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-superpose',
  template: '<html></html>',
  styles: ['']
})
export class SuperposeComponent {
  @Input() superposeModalData: any;
  @Input() label: string;
  @Input() tooltip: string;
}
