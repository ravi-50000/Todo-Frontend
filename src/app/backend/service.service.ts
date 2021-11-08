import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }

  public getAllData(){
    return this.http.get('http://localhost:3000/data').toPromise();
  }
  public adddata(data:any){
    return this.http.post("http://localhost:3000/add",data).toPromise();
  }
  public removeData(id:string){
    return this.http.post("http://localhost:3000/delete",{id:id}).toPromise();
  }
}
