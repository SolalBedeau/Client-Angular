import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import * as _ from 'lodash';


interface User{
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	token_User : string;
}

interface Shop{
	id_Shop : string;
	name_Shop : string;
	description_Shop : string;
	id_Member : string;
	password : string;
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {

  	//get user
  	this.http.get<User>('http:resources/').subscribe(data =>{
  		console.log("firstName: " + data.firstName);
  		console.log("lastName: " + data.lastName);
  		console.log("email: " + data.email);	
  		console.log("password: " + data.password);
  	});

  	//get Shop
  	this.http.get<Shop>('http:').subscribe(data =>{
  		console.log("id_Shop: " + data.id_Shop);
  		console.log("name_Shop: " + data.name_Shop);
  		console.log("description_Shop: " + data.description_Shop);	
  		console.log("id_Member: " + data.id_Member);
  	});

    //post newUser
    this.http.post('http://jsonplaceholder.typicode.com/posts', {
      firstName: 'Jean-Claude',
      lastName: 'Duss',
      email: 'JCDuss@gmail.com',
      password : 'azerty',
      token_User : 1
    })
      .subscribe(
        res => {
          console.log(res);
        },
    );

    //post newShop
    this.http.post('http://jsonplaceholder.typicode.com/posts', {
      name_Shop: 'Duss',
      password: 'xxxxxx',
      description_Shop : 'Yikes',
      id_Member : 'xxxxxx'
    })
      .subscribe(
        res => {
          console.log(res);
        },
    );

    //post connexion
    this.http.post('http://jsonplaceholder.typicode.com/posts', {
      email: 'JCDuss',
      password: 'azerty',
    })
      .subscribe(
        res => {
          console.log(res);
        },
    );
  }

}
