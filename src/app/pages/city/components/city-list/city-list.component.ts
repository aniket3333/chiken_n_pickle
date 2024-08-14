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
    let cityy = city.toLowerCase();
    this.router.navigate([`/${cityy}`]);
  }
}
