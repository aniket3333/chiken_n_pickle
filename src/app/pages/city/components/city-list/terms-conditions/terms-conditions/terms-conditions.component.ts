import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-terms-conditions',
  templateUrl: './terms-conditions.component.html',
  styleUrls: ['./terms-conditions.component.scss']
})
export class TermsConditionsComponent {
  constructor(public bsModalRef: BsModalRef) {}

  closeModal(): void {
    this.bsModalRef.hide(); // Close the modal
  }
}
