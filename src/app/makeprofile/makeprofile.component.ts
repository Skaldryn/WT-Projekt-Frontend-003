//import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

import { Location } from '@angular/common';
import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Plant } from '../shared/plant';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms';

import { RouterModule } from '@angular/router';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";




@Component({
  selector: 'app-makeprofile',
  standalone: true,
    imports: [
        //FormsModule,
        NgIf,
        ReactiveFormsModule,CommonModule, RouterLink
    ],
  templateUrl: './makeprofile.component.html',
  styleUrls: ['./makeprofile.component.css']
})
export class MakeprofileComponent {
    private modalService = inject(NgbModal);
    private bs = inject(BackendService);
    private router = inject(Router);
    closeResult = '';



    dtnameFC = new FormControl('', [Validators.required]);
    latnameFC = new FormControl('', [Validators.required]);
    vgebietFC = new FormControl('', [Validators.required]);
    beschrFC = new FormControl('', [Validators.required]);
    verwendFC = new FormControl('', [Validators.required]);
    ofgattungFC = new FormControl('', [Validators.required]);
    anbauzeitFC = new FormControl('', [Validators.required]);




    private formValid()
    {
        return (
            this.dtnameFC.valid &&
            this.latnameFC.valid &&
            this.vgebietFC.valid &&
            this.beschrFC.valid &&
            this.verwendFC.valid &&
            this.ofgattungFC.valid &&
            this.anbauzeitFC.valid
        );
    }



    createNewPlant(content: TemplateRef<any>) {
        if (this.formValid()) {
            let plant = {
                id: '',
                dtname: this.dtnameFC.value!,
                latname: this.latnameFC.value!,
                vgebiet: this.vgebietFC.value!,
                beschr: this.beschrFC.value!,
                verwend: this.verwendFC.value!,
                ofgattung: this.ofgattungFC.value!,
                anbauzeit: this.anbauzeitFC.value!
            };

            this.bs.createNewPlant(plant).subscribe({
                next: (response) => console.log('response', response),
                error: (err) => console.log(err),
                complete: () => console.log('createNewPlant completed')
            });

            this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
                (result) => {
                    this.closeResult = `Closed with: ${result}`;
                    this.router.navigate(['/plants']);
                },
                (reason) => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                }
            );

            console.log('new plant: ', plant);
        } else {
            console.warn('form still invalid!');
        }
    }

    cancel() {
        this.dtnameFC.reset();
        this.latnameFC.reset();
        this.vgebietFC.reset();
        this.beschrFC.reset();
        this.verwendFC.reset();
        this.ofgattungFC.reset();
        this.anbauzeitFC.reset();
    }

    private getDismissReason(reason: any): string {
        switch (reason) {
            case ModalDismissReasons.ESC:
                return 'by pressing ESC';
            case ModalDismissReasons.BACKDROP_CLICK:
                return 'by clicking on a backdrop';
            default:
                return `with: ${reason}`;
        }
    }
































/*

    createNewPlant():void
    {

        const values = this.form.value;
        this.plant.dtname = values.dtnameControl!;
        this.plant.latname = values.latnameControl!;
        this.plant.vgebiet = values.vgebietControl!;
        this.plant.beschr = values.beschrControl!;
        this.plant.verwend = values.verwendControl!;
        this.plant.ofgattung = values.ofgattungControl!;
        this.plant.anbauzeit = values.anbauzeitControl!;

        this.bs.createNewPlant( this.plant)
            .subscribe({
                    next: (response) => {
                        console.log(response);
                        console.log(response.id);
                    },
                    error: (err) => {
                        console.log(err);
                    },
                    complete: () => console.log('createNewPlant() completed')
                }
            );
        this.router.navigateByUrl('/plant');

    }

    cancel(): void
    {

        this.location.back();
    }

 */




}
