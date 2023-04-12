import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Movie } from './film';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServise {

  constructor(private http: HttpClient) { }
  getMovie(Title: string){
    return this.http.get(`http://www.omdbapi.com/?apikey=fb4b7366&t=${Title}`);
  }
}
