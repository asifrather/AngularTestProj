import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboradServiceService {

  constructor(private _http:HttpClient) { }

  public commonData:string='zahid';
  public commonNew:string='shahid';

  public ApiUrl:string='https://fakestoreapi.com/products';


  public getProducts(){
    return this._http.get(this.ApiUrl)
  }

}
