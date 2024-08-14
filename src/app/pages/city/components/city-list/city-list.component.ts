import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { TermsConditionsComponent } from './terms-conditions/terms-conditions/terms-conditions.component';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent {
  //#region
  bsModalRef: BsModalRef;

  constructor(private router: Router,private _modalService: BsModalService) {}

  navigateTo(city: string,urlCity:string): void {
    sessionStorage.setItem('city',city);
    let cityForUrl = urlCity.toLowerCase();
    sessionStorage.setItem('cityForUrl',cityForUrl);
    this.router.navigate([`/${cityForUrl}`]);
  }
  
  openPopUp() {
    const options: ModalOptions = {
      backdrop: 'static',
      class: 'modal-xl',
      providers: []
    };
    this.bsModalRef =  this._modalService.show(TermsConditionsComponent, options);
  }
}
