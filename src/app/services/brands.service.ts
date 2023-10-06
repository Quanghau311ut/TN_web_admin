import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {
  url='https://localhost:7033/api/Brand';

constructor(private _http:HttpClient) { }
  getData(){
    const url=`${this.url}/getdata`;
    return this._http.get(url).toPromise();
  }
  getdatabyID(id:number){
    const url=`${this.url}/getdatabyID/${id}`;
    return this._http.get(url).toPromise();
  }

  createData(data:any){
    const url=`${this.url}/create`;
    return this._http.post(url, data).toPromise();
  }

  updateData(id:number,data:any){
    const url=`${this.url}/edit/${id}`;
    return this._http.put(url, data).toPromise();
  }

  deleteData(id:number){
    const url=`${this.url}/delete/${id}`;
    return this._http.delete(url).toPromise();
  }

}
