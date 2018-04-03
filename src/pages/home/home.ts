<<<<<<< HEAD
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
=======
import { Component, Injectable } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Page} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';

@Page({
  templateUrl: 'build/pages/home/home.html',
  providers:[PeopleService]
  
})
export class HomePage {

  }
  
  loadPeople() {
    
    return new Promise(resolve => {
      
      this.peopleService.load(this.start)
      .then(data => {
        
        for(let person of data) {
          this.people.push(person);
        }
        
        resolve(true);
        
      });
            
    });

  }
  
  doInfinite(infiniteScroll:any) {
     console.log('doInfinite, start is currently '+this.start);
     this.start+=50;
     
     this.loadPeople().then(()=>{
       infiniteScroll.complete();
     });
     
  }



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



>>>>>>> de6c535c707d667f95a2f5db7013f14cee80b4b3
