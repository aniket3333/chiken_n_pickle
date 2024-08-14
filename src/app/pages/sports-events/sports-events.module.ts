import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SportEvenetListComponent } from "./components/sport-evenet-list/sport-evenet-list.component";
import { ProviderList } from "./sports-events-provider-registrar";
import { SportEventsRoutingModule } from "./sports-events-routing.module";

@NgModule({
    declarations: [
        SportEvenetListComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SportEventsRoutingModule
    ],
    providers: [ProviderList],
})
export class SportEventsModule { }
