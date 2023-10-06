import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoreImageService {
  url = 'https://localhost:7033/api/MoreImage';
  constructor(private _http: HttpClient) { }

  getData(){
    const url = `${this.url}/Getdata`;
    return this._http.get(url).toPromise();
  }

  getByNewId(newId: any){
    const url = `${this.url}/getByNewId/${newId}`;
    return this._http.get(url).toPromise();
  }

  create(data:any) {
    const url = `${this.url}/Create`;
    return this._http.post(url,data).toPromise();
  }
  getDatabyID(id: number) {
    const url = `${this.url}/Getdataby/${id}`;
    return this._http.get(url).toPromise();
  }
  edit(id: number, newData: any) {
    const url = `${this.url}/Edit/${id}`;
    return this._http.put(url, newData).toPromise();
  }
  delete(id: number) {
    const url = `${this.url}/Delete/${id}`;
    return this._http.delete(url).toPromise();
  }
}
