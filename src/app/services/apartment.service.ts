import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Injectable } from "@angular/core";
import { Apartment } from "../dto/Apartment.dto";
import { Residents } from "../dto/Residents.dto";
import { ApartmentAddUpdate } from "./apartment.add.update";



@Injectable()
export class ApartmentService {
  endpoint: string = "https://localhost:7206/api/Dzivoklis";

  constructor(private httpClient: HttpClient) {}

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getApartments(): Observable<Apartment[]> {
    return this.httpClient.get<Apartment[]>(this.endpoint, this.httpHeader);
  }

  getApartmentById(id: string): Observable<Apartment> {
    return this.httpClient.get<Apartment>(`${this.endpoint}/${id}`, this.httpHeader);
  }

  getApartmentsByHouseId(houseId: string): Observable<Apartment[]> {
    return this.getApartments().pipe(
      map(apartments => apartments.filter(apartment => apartment.majaId.toString() === houseId))
    );
  }
  
  getResidentsByApartmentId(apartmentId: string): Observable<Residents[]> {
    return this.httpClient.get<Residents[]>(`${this.endpoint}/${apartmentId}/dzivoklisIedzivotaji`, this.httpHeader);
  }

  updateApartment(id: string, apartmentToUpdate: ApartmentAddUpdate): Observable<Apartment> {
    return this.httpClient.put<Apartment>(`${this.endpoint}/${id}`, apartmentToUpdate, this.httpHeader);
  }
}


