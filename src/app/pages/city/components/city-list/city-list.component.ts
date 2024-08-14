import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent {
  //#region
  constructor(private router: Router) {}

  navigateTo(city: string,urlCity:string): void {
    sessionStorage.setItem('city',city);
    let cityy = urlCity.toLowerCase();
    this.router.navigate([`/${cityy}`]);
  }
}
