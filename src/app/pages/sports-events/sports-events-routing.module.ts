import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportEvenetListComponent } from './components/sport-evenet-list/sport-evenet-list.component';
import { IndoorSportsComponent } from './components/sport-evenet-list/sports/indoor-sports/indoor-sports/indoor-sports.component';
const routes: Routes = [
    {
        path:'',
        component:SportEvenetListComponent
    },
    {
        path:'pickleball-indoor-court',
        component:IndoorSportsComponent
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SportEventsRoutingModule { }
