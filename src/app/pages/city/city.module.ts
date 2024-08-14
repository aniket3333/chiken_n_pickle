import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProviderList } from "./city-provider-registrar";
import { CityRoutingModule } from "./city-routing.module";
import { CityListComponent } from './components/city-list/city-list.component';
import { NgbModule, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        CityListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        CityRoutingModule,
        ReactiveFormsModule,
        NgbAccordionModule,
        NgbModule
    ],
    providers: [ProviderList],
})
export class CityModule { }
