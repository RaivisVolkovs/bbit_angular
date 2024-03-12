import { RouterModule, Routes } from "@angular/router";
import { AllHousesComponent } from "./all-houses/all-houses.component";
import { NgModule } from "@angular/core";
import { HouseDetailsComponent } from "./house-details/house-details.component";
import { ApartmentDetailsComponent } from "./apartment-details/apartment-details.component";



const routes: Routes = [
    {path: 'all-houses', component: AllHousesComponent},
    { path: 'house/:id', component: HouseDetailsComponent },
    {path: 'apartment/:id', component: ApartmentDetailsComponent},
    { path: '', redirectTo: 'all-houses', pathMatch: 'full' },
    

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule { }