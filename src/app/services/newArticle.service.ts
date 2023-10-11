import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewArticleService {
  add(arg0: { severity: string; summary: string; detail: string; }) {
    throw new Error('Method not implemented.');
  }
  url = `https://localhost:7033/api/NewActicle`;
  constructor(private _http: HttpClient) { }
  getData() {
    const url = `${this.url}/Getdata`;
    return this._http.get(url).toPromise();
  }

  uploadfile(file:File){
    const url = `${this.url}/Uploadfile`;
    return this._http.post(url,file).toPromise();
  }
  create(data: any) {
    const url = `${this.url}/Create`;
    return this._http.post(url, data).toPromise();
  }

  getDatabyID(id: number) {
    const url = `${this.url}/getdatabyId/${id}`;
    return this._http.get(url).toPromise();
  }
  ListImage(id: number) {
    const urlImage = `${this.url}/listImage/${id}`;
    return this._http.get(urlImage).toPromise();
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
