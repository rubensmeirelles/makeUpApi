import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MakeupService {
  constructor(private httpClient: HttpClient) { }

  apiUrl = "https://makeup-api.herokuapp.com/api/v1/products.json"

  httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

  getProducts(){
    return this.httpClient.get(this.apiUrl)
  }
}

