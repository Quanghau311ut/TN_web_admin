import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'https://localhost:7033/api/Categories';
  constructor(
    private _http: HttpClient
  ) { }

  getData() {
    const url = `${this.url}/getdata`;
    return this._http.get(url).toPromise();
  }

  createdata(data: any) {
    const url = `${this.url}/Create`;
    return this._http.post(url, data).toPromise();
  }

  getdatabyID(id: number) {
    const url = `${this.url}/getdatabyID/${id}`;
    return this._http.get(url).toPromise();
  }



  // Hàm sửa
  updateData(id: number, newData: any) {
    const url = `${this.url}/edit/${id}`;
    return this._http.put(url, newData).toPromise();
  }
  //Hàm xóa
  deleteData(id: number) {
    const url = `${this.url}/delete/${id}`;
    return this._http.delete(url).toPromise();
  }

}
