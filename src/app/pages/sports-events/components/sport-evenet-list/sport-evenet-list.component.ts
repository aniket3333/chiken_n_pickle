import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sport-evenet-list',
  templateUrl: './sport-evenet-list.component.html',
  styleUrls: ['./sport-evenet-list.component.scss']
})
export class SportEvenetListComponent implements OnInit{
  selectedCity: string | null = null;

  ngOnInit(): void {
    this.selectedCity = sessionStorage.getItem('selectedCity');
  }
}
