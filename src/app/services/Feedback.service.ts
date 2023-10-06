import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url=`https://localhost:7033/api/Comment`

constructor(private _http:HttpClient) { }

getData(){
  const url=`${this.url}/getdata`;
  return this._http.get(url).toPromise();
}


 deleteData(id:Number): Promise<string> {
  const url=`${this.url}/delete/${id}`;
  return this._http.delete<string>(url).toPromise();
}
}
