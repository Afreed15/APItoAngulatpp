import { Injectable } from '@angular/core';
import { Passport } from './passport.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassportService {
  
  readonly ourUrl='https://localhost:44340/api';
  formData:Passport=new Passport();
  list:Passport[];
    constructor(private objhttp:HttpClient) { }
    passportList()
    {
    this.objhttp.get(this.ourUrl+'/Passports/').toPromise().then
    (p=>this.list=p as Passport[]);
    }
    deletePassport(id)
    {
      return this.objhttp.delete(this.ourUrl+'/Passports/'+id);
    }
    
}
