

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plant } from './plant';
import { Observable } from 'rxjs';
import {end} from "@popperjs/core";

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  backendUrl = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // get all Plants
  getAllPlants(): Observable<Plant[]>
  {
    let endpoint = '/plants';
    return this.http.get<Plant[]>(this.backendUrl + endpoint);
  }

  // delete one Plant
  deleteOnePlant(id:string): Observable<any>
  {
    let endpoint = '/plants';
    return this.http.delete<any>(this.backendUrl + end + "/" +  id);
  }

  // get / fetch one plant
  getOnePlant(id:string):Observable<Plant>
  {
    let endpoint = '/plants';
    return this.http.get<Plant>(this.backendUrl + endpoint + '/' + id);
  }

  // create / post / plant :) a new Plant
  createNewPlant(plant:Plant): Observable<Plant>
  {
    let endpoint = '/plants';
    return this.http.post<Plant>(this.backendUrl + endpoint, plant);
  }

  // update a plant
  updateOnePlant(plant :Plant, id : string): Observable<Plant>
  {
    let endpoint = '/plants';
    return this.http.put<Plant>(this.backendUrl + endpoint + '/' + id, plant);

  }


}
