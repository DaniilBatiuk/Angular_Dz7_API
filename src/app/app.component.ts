import { Component } from '@angular/core';
import { ApiServise } from '../app/api-servise';
import { Movie } from '../app/film';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ApiServise]
})
export class AppComponent {
  movie: Movie = new Movie("", 0, "", "", "", ["", ""]);
  done: boolean = false;
  Title: string = "";
  constructor(private apiService: ApiServise) {}

  submit(): void {
    this.apiService.getMovie(this.Title).subscribe({
      next: (data: any) => {
        this.movie = data;
        console.log(data);
        if(data.Response == "False"){
          this.done = false;
        }
        else{
        this.done = true;
        }
      }
    });
  }
}
