


import { Component, OnInit, inject } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Plant } from '../shared/plant';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  //imports: [CommonModule, RouterLink],
  imports: [CommonModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{

  plants: Plant[] = [];

  constructor(private bs: BackendService) {}

  ngOnInit(): void{
      this.readAll();
    }



  //bs = inject(BackendService)



  readAll(): void {
    this.bs.getAllPlants().subscribe(
        {
          next: (response) => {
            this.plants = response;
            console.log(this.plants);
            return this.plants;
          },
          error: (err) => console.log(err),
          complete: () => console.log('getAllPlants() completed')
        })
  }


/*

  delete(id: string): void {
    console.log('id', id)
    this.bs.deleteOnePlant(id).subscribe(
        {
          next: (response) => {
            console.log(response);
            this.readAll();
          },
          error: (err) => console.log(err),
          complete: () => console.log('deleting completed')
        })


  }

 */














}
