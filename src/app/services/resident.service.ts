import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Residents } from "../dto/Residents.dto";
import { Observable, map } from "rxjs";
import { ResidentsAddUpdate } from "./resident.add.update";




@Injectable()
export class ResidentService {


    endpoint: string ="https://localhost:7206/api/Iedzivotaji";

    constructor(private httpClient: HttpClient) {}

    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getResidents(): Observable<Residents[]> {
        return this.httpClient.get<Residents[]>(this.endpoint, this.httpHeader);
    }

    getResidentById(id: string): Observable<Residents> {
        return this.httpClient.get<Residents>(this.endpoint + "/" + id, this.httpHeader);
    }

    updateResident(id: string, residentToUpdate: ResidentsAddUpdate): Observable<ResidentsAddUpdate> {
        return this.httpClient.put<ResidentsAddUpdate>(`${this.endpoint}/${id}`, residentToUpdate, this.httpHeader);
    }
      
}