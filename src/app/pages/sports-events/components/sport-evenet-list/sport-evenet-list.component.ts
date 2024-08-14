import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sport-evenet-list',
  templateUrl: './sport-evenet-list.component.html',
  styleUrls: ['./sport-evenet-list.component.scss']
})
export class SportEvenetListComponent implements OnInit{
  city: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.city = sessionStorage.getItem('city');
  }
  openPopUp()
  {
    
  }
}
