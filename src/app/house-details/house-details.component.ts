import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HouseService } from '../services/house.service';
import { Houses } from '../dto/Houses.dto';
import { Apartment } from '../dto/Apartment.dto';
import { ApartmentService } from '../services/apartment.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.css']
})
export class HouseDetailsComponent implements OnInit {
  house!: Houses;
  apartments: Apartment[] = [];
  updateHouseForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private houseService: HouseService,
    private apartmentService: ApartmentService,
    private router: Router,
    private fb: FormBuilder
  ) {

    
  }

  ngOnInit(): void {
    this.updateHouseForm = this.fb.group({
      numurs: ['', Validators.required],
      iela: ['', Validators.required],
      pilseta: ['', Validators.required],
      valsts: ['', Validators.required],
      pastaIndekss: ['', Validators.required]
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      if (id) {
        this.houseService.getHouseById(id).subscribe((res: Houses) => {
          this.house = res;
          this.initialiseApartments(res.id.toString());

          this.updateHouseForm.patchValue({
            numurs: this.house.numurs,
            iela: this.house.iela,
            pilseta: this.house.pilseta,
            valsts: this.house.valsts,
            pastaIndekss: this.house.pastaIndekss
          });
        });
      }
    });
  }


  initialiseApartments(houseId: string): void {
    this.apartmentService.getApartmentsByHouseId(houseId).subscribe((res: Apartment[]) => {
      this.apartments = res;
    });
  }

  updateHouse(): void {
    if (this.updateHouseForm.valid) {
        const updatedHouseData = {
            id: this.house.id,
            ...this.updateHouseForm.value 
        };
        this.houseService.updateHouse(this.house.id.toString(), updatedHouseData).subscribe(() => {
            console.log('House updated successfully');
            this.router.navigate(['/all-houses']);
        });
    }
}
  onBackClick(): void {
    this.router.navigate(['/all-houses']);
  }
}
