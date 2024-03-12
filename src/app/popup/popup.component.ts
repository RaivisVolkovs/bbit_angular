import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Residents } from '../dto/Residents.dto';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResidentService } from '../services/resident.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  @Output() closeRequest = new EventEmitter<void>();
  @Input() residentId! : number

  residents!: Residents;
  updateResidentsForm!: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private residentsService: ResidentService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.updateResidentsForm = this.fb.group({
      vards: ['', Validators.required],
      uzvards: ['', Validators.required],
      personasKods: ['', Validators.required],
      dzimsanasDatums: ['', Validators.required],
      telefons: ['', Validators.required],
      email: ['', Validators.required]
    });

    this.route.paramMap.subscribe((params: ParamMap) => {
      const id = this.residentId;
      console.log(params);
      if (id) {
        this.residentsService.getResidentById(id.toString()).subscribe((res: Residents) => {
          this.residents = res;

          this.updateResidentsForm.patchValue({
            vards: res.vards,
            uzvards: res.uzvards,
            personasKods: res.personasKods,
            dzimsanasDatums: res.dzimsanasDatums,
            telefons: res.telefons,
            email: res.email,
          });
        });
      }
    });
  }

  updateResident(): void {
    if (this.updateResidentsForm.valid) {
      const updatedResidentsData = {
        id: this.residents.id,
        ...this.updateResidentsForm.value
      };
      this.residentsService.updateResident(this.residents.id.toString(), updatedResidentsData).subscribe(() => {
        console.log('Resident updated successfully');
        this.router.navigate(['/all-houses']);
      });
    }
  }

  close(): void {
    this.closeRequest.emit();
  }

  onBackClick(): void {
    this.router.navigate(['/all-houses']);
  }
}