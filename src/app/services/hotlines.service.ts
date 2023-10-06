import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HotlinesService {

  url=`https://localhost:7033/api/Hotline`

constructor(private _http:HttpClient) { }
  getData(){
    const url=`${this.url}`;
    return this._http.get(url).toPromise();
  }

  deleteData(id:number){
    const url=`${this.url}/${id}`;
    return  this._http.delete<string>(url).toPromise();
  }
}
