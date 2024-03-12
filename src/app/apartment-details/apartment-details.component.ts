import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Apartment } from '../dto/Apartment.dto';
import { Residents } from '../dto/Residents.dto';
import { ApartmentService } from '../services/apartment.service';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.css']
})
export class ApartmentDetailsComponent implements OnInit {
  apartment!: Apartment;
  residents: Residents[] = [];
  updateApartmentForm!: FormGroup;
  showPopup: number | null = null; 

  constructor(
    private route: ActivatedRoute,
    private apartmentService: ApartmentService,
    private router: Router,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.updateApartmentForm = this.fb.group({
      numurs: ['', Validators.required],
      stavs: ['', Validators.required],
      istabuSkaits: ['', Validators.required],
      iedzivotajuSkaits: ['', Validators.required],
      pilnaPlatiba: ['', Validators.required],
      dzivojamaPlatiba: ['', Validators.required]
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = params.get("id");
      if (id) {
        this.apartmentService.getApartmentById(id).subscribe((res: Apartment) => {
          this.apartment = res;
          this.initialiseResidents(id);
          this.updateApartmentForm.patchValue(res);
        }, error => {
          console.error('Error fetching apartment details:', error);
        });
      }
    });
  }

  initialiseResidents(apartmentId: string): void {
    this.apartmentService.getResidentsByApartmentId(apartmentId).subscribe((residents: Residents[]) => {
      this.residents = residents;
    }, error => {
      console.error('There was an error fetching the residents', error);
    });
  }

  updateApartment(): void {
    if (this.updateApartmentForm.valid) {
      const updatedApartmentData = {
        id: this.apartment.id,
        ...this.updateApartmentForm.value
      };
      this.apartmentService.updateApartment(this.apartment.id.toString(), updatedApartmentData).subscribe(() => {
        console.log('Apartment updated successfully');
        this.router.navigate(['/all-houses']);
      }, error => {
        console.error('Error updating apartment:', error);
      });
    }
  }


  

  onBackClick(): void {
    this.router.navigate(['/all-houses']);
  }
}
