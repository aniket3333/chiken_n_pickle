import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './components/city-list/city-list.component';
const routes: Routes = [
    {
        path: '',
        component: CityListComponent
    },

    {
        path: 'sport-events',
        loadChildren: () => import('../sports-events/sports-events.module').then(m => m.SportEventsModule),
      }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CityRoutingModule { }
