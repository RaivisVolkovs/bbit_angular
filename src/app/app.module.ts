import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { AllHousesComponent } from './all-houses/all-houses.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HouseService } from './services/house.service';
import { HouseDetailsComponent } from './house-details/house-details.component';
import { ApartmentService } from './services/apartment.service';
import { ResidentService } from './services/resident.service';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { PopupComponent } from './popup/popup.component';


@NgModule({
  declarations: [
    AppComponent,
    AllHousesComponent,
    HeaderComponent,
    HouseDetailsComponent,
    ApartmentDetailsComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    HouseService,
    ApartmentService,
    ResidentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
