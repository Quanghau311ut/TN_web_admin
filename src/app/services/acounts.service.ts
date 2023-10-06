import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcountsService {
  url= `https://localhost:7033/api/Acount`;

constructor(private _http:HttpClient) { }


  getData(){
    const url=`${this.url}/getdata`;
    return this._http.get(url).toPromise();
  }

  Create(data:any){
    const url=`${this.url}/create`;
    return this._http.post(url, data).toPromise();
  }

  getDatabyID(id:number){
    const  url=`${this.url}/getdatabyID/${id}`;
    return this._http.get(url).toPromise();
  }

  edit(id:number,newData:any){
    const url=`${this.url}/edit/${id}`
    return this._http.put(url,newData).toPromise();
  }

  delete(id:number){
    const url=`${this.url}/delete/${id}`;
    return this._http.delete(url).toPromise();
  }
}
