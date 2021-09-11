import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IObjRequest } from 'src/app/interfaces/iobj-request';
@Injectable({
  providedIn: 'root'
})
export class ServicesDataService {
  public urlServer: string = "https://pimaid.dev:8443/CreditoParaTi/";

  constructor( private httpClient: HttpClient) { }

  getPetition(url: string) {
    return this.httpClient.get<IObjRequest>(this.urlServer + url);
  }

  async postPetition(url: string, data: any, token: boolean = false) {
    return this.httpClient.post<IObjRequest>(this.urlServer + url, data).toPromise();
  }
}
