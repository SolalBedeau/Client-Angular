import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


interface Product{
  	name_Product: string; 
  	id_Shop: string;
  	UnityPrice: string;
  }

interface Shop{
	name_Shop: string;
	description_Shop: string; 
}

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

    constructor(private http:HttpClient) {
    }


  ngOnInit() {
  	  //get Product
      this.http.get<Product>('https:resources/product/all').subscribe(data => {
      console.log("name_Product: " + data.name_Product);
      console.log("UnityPrice: " + data.UnityPrice);
      console.log("id_Shop: " + data.id_Shop);
    });


      //get ProductRecherche
      this.http.get<Product>('https:').subscribe(data => {
      console.log("name_Product: " + data.name_Product);
      console.log("UnityPrice: " + data.UnityPrice);
      console.log("id_Shop: " + data.id_Shop);
    });

      //get ProductTag
      this.http.get<Product>('https:').subscribe(data => {
      console.log("name_Product: " + data.name_Product);
      console.log("UnityPrice: " + data.UnityPrice);
      console.log("id_Shop: " + data.id_Shop);
    });

      //get Shops
      this.http.get<Shop>('https:').subscribe(data => {
      console.log("name_Shop: " + data.name_Shop);
      console.log("description_Shop: " + data.description_Shop);
    });
    
    //get ShopsRecherche
      this.http.get<Shop>('https:').subscribe(data => {
      console.log("name_Shop: " + data.name_Shop);
      console.log("description_Shop: " + data.description_Shop);
    });

    //post newProduit
    this.http.post('http:resources/product/create', {
      user_id: 1,
      token: 1,
      name_Product: 'xxxxxx',
      name_Shop: 'Duss',
      UnityPrice : '20'
    })
      .subscribe(
        res => {
          console.log(res);
        },
    );

    }
  }

