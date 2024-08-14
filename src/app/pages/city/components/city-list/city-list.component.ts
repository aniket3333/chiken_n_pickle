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

  navigateTo(city: string): void {
    sessionStorage.setItem('selectedCity', city);
    this.router.navigate(['/choose-location/sport-events']);
  }
}
