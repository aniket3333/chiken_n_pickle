import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ProviderList } from "./city-provider-registrar";
import { CityRoutingModule } from "./city-routing.module";
import { CityListComponent } from './components/city-list/city-list.component';
@NgModule({
  declarations: [
  
    CityListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CityRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [ProviderList],
})
export class CityModule {}
