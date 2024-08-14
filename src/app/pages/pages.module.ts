import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PagesRoutingModule } from "./pages-routing.module";
import { ProviderList } from "./pages-provider-registrar";
@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    PagesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ProviderList],
})
export class PagesModule {}
