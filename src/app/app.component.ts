import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'nguyen Van a';
  data_date = new Date();
  data_json = {
    name: 'Nguyen A',
    age: 18,
  };
  num = 1000;
  data$: Observable<
    {
      userId: number;
      id: number;
      title: string;
      body: string;
    }[]
  >;
  arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private http: HttpClient) {
    this.data$ = this.getPosts();
    setTimeout(() => {
      this.arr = [10, ...this.arr];
    }, 5000);
  }

  getPosts() {
    return this.http.get<
      {
        userId: number;
        id: number;
        title: string;
        body: string;
      }[]
    >('https://jsonplaceholder.typicode.com/posts');
  }
}
