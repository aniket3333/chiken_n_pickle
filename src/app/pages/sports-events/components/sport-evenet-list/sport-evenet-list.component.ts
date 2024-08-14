import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sport-evenet-list',
  templateUrl: './sport-evenet-list.component.html',
  styleUrls: ['./sport-evenet-list.component.scss']
})
export class SportEvenetListComponent implements OnInit{
  city: string | null = null;
  routeCity: string | null = null;
  actualcity: string|null=null;

  constructor(private route: Router,private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.city = sessionStorage.getItem('cityForUrl');
    this.actualcity = sessionStorage.getItem('city');
  }
  openPopUp()
  {
    
  }

  navigateTo(): void {
    this.route.navigate([`/${this.city}/pickleball-indoor-court`]);
  }
}
