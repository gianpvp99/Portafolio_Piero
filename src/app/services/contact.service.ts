import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CONTACT } from 'src/helpers/url';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  listPrueba(idContact:number):Observable<any>{
    // let address = this.apiUrl + "list?idContract="+idContract;
    let address = `${environment.apiUrl}${CONTACT.listprueba}${idContact}`;
    // console.log(address);
    return this.http.get<any>(address); // 
  }
  registerContact(payload:any):Observable<any>{
    let address = `${environment.apiUrl}${CONTACT.register}`;
    return this.http.post<any>(address, payload);
  }
}
