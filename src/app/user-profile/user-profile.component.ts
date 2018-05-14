import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

private user: Array<string>;

private newUser: Array<string>;

private newShop: Array<string>;

private updateUser: Array<string>;



  constructor(private http:HttpClient) { 
  this.user = new Array;
  this.user = {"email" : "jc@d.uss","password" : "troc"};

  this.newUser = new Array;
  this.newUser = {"firstName":"leo","lastName":"solal","email" : "jc@d.uss","password" : "troc"};

  this.newShop = new Array;
  this.newShop = {"user_id": 2,"token":"sfhus","name":"la boutique a Jean-Claude", "description":"la boutique du celebre Jean-Claude Duss" };

  this.updateUser = new Array;
  this.updateUser = {"id": 9,"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI5In0.t_Ds0SFDatCx5yZl7BHfOLRnCP17d_ai7L8x0EjLLhA","firstName":"dong", "lastName":"ding", "email":"lion@plan.flop","password":"plopplop"};

}


 bidule = true;
 connexion(this.bidule){
  this.bidule = false;
 }

deconnexion(this.bidule){
  this.bidule = true;
}




  ngOnInit() {


      //console.log(this.user);
      //console.log(this.newUser);
      //console.log(this.newShop);
      //console.log(this.updateUser);
    
    
    
 /*   
    //post newUser
    this.http.post('http://localhost:8080/myapp/auth/member',
      this.newUser)
      .subscribe(
        res => {
          console.log(res);
        },
    );


    //post newShop
    this.http.post('http://localhost:8080/myapp/shop/',
    this.newShop)
      .subscribe(
        res => {
          console.log(res);
        },
    );

    //post connexion
    this.http.post('http://localhost:8080/myapp/auth/login',
      this.user)
      .subscribe(
        res => {
          console.log(res);
        },
    );




*/
    //put UpdateUser
    this.http.put('http://localhost:8080/myapp/member', 
    this.updateUser)
      .subscribe(
        res => {
          console.log(res);
        },
    );

  }

}
