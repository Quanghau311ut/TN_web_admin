import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntroduceService {
  url='https://localhost:7033/api/Introduce';
  constructor(private _http:HttpClient) { }
  getData(){
    const url=`${this.url}/Getdata`;
    return this._http.get(url).toPromise();
  }

  getdatabyID(id:number){
    const url=`${this.url}/Getdataby/${id}`;
    return this._http.get(url).toPromise();
  }

  createData(data:any){
    const url=`${this.url}/Create`;
    return this._http.post(url, data).toPromise();
  }
  updataData(id:number,newData:any){
    const url=`${this.url}/Edit/${id}`;
    return this._http.put(url,newData).toPromise();
  }

  deleteData(id:number){
    const url = `${this.url}/delete/${id}`;
    return this._http.delete(url).toPromise();
  }
}
