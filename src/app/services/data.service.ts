// data.service.ts

import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export const DOCUMENT_ENDPOINT = '/document';

@Injectable({
  providedIn: "root",
})
export class DataService {
  private apiUrl = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {
  }

  saveUserData(body: string): Observable<any> {
    return this.http.post(this.apiUrl + DOCUMENT_ENDPOINT, body);
  }
}
