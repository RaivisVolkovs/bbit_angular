import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HouseService } from '../services/house.service';
import { Houses } from '../dto/Houses.dto';

@Component({
  selector: 'app-all-houses',
  templateUrl: './all-houses.component.html',
  styleUrls: ['./all-houses.component.css']
})
export class AllHousesComponent implements OnInit {

  house: Houses[] = [];

  constructor(
    private houseService: HouseService,
  ) {

  }

  ngOnInit(): void {
    this.initialiseHouses();
  }

  initialiseHouses(): void {
    this.houseService.getHouses().subscribe((res: Houses[]) => {
      this.house = res;
    });
  }

}
