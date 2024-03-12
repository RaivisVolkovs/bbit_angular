import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Houses } from "../dto/Houses.dto";
import { HouseAddUpdate } from "./house.add.update";



@Injectable()
export class HouseService {


    endpoint: string ="https://localhost:7206/api/Maja";

    constructor(private httpClient: HttpClient) {}

    httpHeader = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    getHouses(): Observable<Houses[]> {
        return this.httpClient.get<Houses[]>(this.endpoint, this.httpHeader);
    }

    getHouseById(id: string): Observable<Houses> {
        return this.httpClient.get<Houses>(this.endpoint + "/" + id, this.httpHeader);
    }

    updateHouse(id: string, houseToUpdate: HouseAddUpdate): Observable<Houses> {
        return this.httpClient.put<Houses>(this.endpoint + "/" + id, houseToUpdate, this.httpHeader);
    }

}
