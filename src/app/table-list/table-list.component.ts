import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import { Http, Response, RequestOptions, Headers } from '@angular/http';


//Injection

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {


         private products: Array<string>;
         private shops: Array<string>; 
         private newProduct: Array<string>;

    constructor(private http:HttpClient) {
      this.products = new Array;
      this.shops = new Array;

      this.newProduct = new Array;
      this.newProduct = {"email" : "jc@d.uss","password" : "troc"};

    }


  


  ngOnInit() {  
      
  	  //get Product all
      this.http.get('http://localhost:8080/myapp/product/all')
      .subscribe(data => {
        this.products = data;
      	console.log(data);
      	console.log("Produits:");
      	console.log(data[0].name);
      	console.log(data[1].name);
      	console.log(data[2].name);
      	console.log(data[3].name);
      	console.log(data[4].name);
      	console.log(data[5].name);
        console.log(this.products);
  });

      //get Shops
      this.http.get('http://localhost:8080/myapp/shop/all/')
      .subscribe(data => {
      this.shops = data;
      console.log(data);
      console.log("Shops: " );
      console.log(data[0].name + ", " + data[0].description);
      console.log(data[1].name + ", " + data[1].description);
      console.log(data[2].name + ", " + data[2].description);
    });

/*   
    //post newProduct
    this.http.post('http://localhost:8080/myapp/product/',
      this.newProduct)
      .subscribe(
        res => {
          console.log(res);
        },
    );
*/

/*   
     //post openChat
    this.http.post('http://localhost:8080/myapp/chat/openchat', {
      user_id: localStorage.getItem(user_id),
      token: localStorage.getItem(token),
      shop_id: bouton (shop_id),
      name_Product: 'xxxxxx',
      name_Shop: 'Duss'
    })
      .subscribe(
        res => {
          console.log(res);
        },
    );
*/  
}
}