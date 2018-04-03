import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the PeopleService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class PeopleService {

  perpage:number = 50;
  
  constructor(public http: Http) {}

  load(start:number=0) {

    return new Promise(resolve => {
      
      this.http.get('http://localhost:8100/api/people?filter[limit]='+this.perpage+'&filter[skip]='+start)
        .map(res => res.json())
        .subscribe(data => {

          resolve(data);

        });
    });
  }
}