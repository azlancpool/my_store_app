import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from './models/product.model';
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ADD_PRODUCT_URL = environment.API_URL + "/product";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) { }

  newProduct(product: IProduct): Observable<any> {
    product.name = encodeURIComponent(product.name);
    return this.http.post<IProduct>(this.ADD_PRODUCT_URL, product, this.httpOptions);
  }
}
