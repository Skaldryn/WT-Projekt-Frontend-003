import { Location } from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Plant } from '../shared/plant';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  id: string = '';
  plant!: Plant;

  form = new FormGroup({
    dtnameControl : new FormControl<string>(''),
    latnameControl : new FormControl<string>(''),
    vgebietControl : new FormControl<string>(''),
    beschrControl : new FormControl<string>(''),
    verwendControl : new FormControl<string>(''),
    ofgattungControl : new FormControl<string>(''),
    anbauzeitControl : new FormControl<string>(''),



  })

  constructor(
      private route: ActivatedRoute,
      private bs: BackendService,
      private location: Location,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getOnePlant(this.id);
  }

  getOnePlant(id: string): void {
    this.bs.getOnePlant(id).subscribe(
        {
          next: (response: Plant) => {
            this.plant = response;
            console.log(this.plant);
            this.form.patchValue({
              dtnameControl: this.plant?.dtname,
              latnameControl: this.plant?.latname,
              vgebietControl: this.plant?.vgebiet,
              beschrControl: this.plant?.beschr,
              verwendControl: this.plant?.verwend,
              ofgattungControl: this.plant?.ofgattung,
              anbauzeitControl: this.plant?.anbauzeit,
            })
            return this.plant;
          },
          error: (err) => console.log(err),
          complete: () => console.log('getOnePlant() completed')
        });
  }

  updateOnePlant():void
  {

    const values = this.form.value;
    this.plant.dtname = values.dtnameControl!;
    this.plant.latname = values.latnameControl!;
    this.plant.vgebiet = values.vgebietControl!;
    this.plant.beschr = values.beschrControl!;
    this.plant.verwend = values.verwendControl!;
    this.plant.ofgattung = values.ofgattungControl!;
    this.plant.anbauzeit = values.anbauzeitControl!;

    this.bs.updateOnePlant(this.id, this.plant)
        .subscribe({
              next: (response) => {
                console.log(response);
                console.log(response.id);
              },
              error: (err) => {
                console.log(err);
              },
              complete: () => console.log('updateOnePlant() completed')
            }
        );
    this.router.navigateByUrl('/plant');

  }

  cancel(): void
  {

    this.location.back();
  }

}
