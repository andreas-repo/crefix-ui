// data.service.ts

import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {CmDocument} from '../models/cm-document.model';
import {Measurement} from '../models/measurement.model';

export const DOCUMENT_ENDPOINT = '/createCmDocument';
export const GET_DOCUMENT_ENDPOINT = '/getCmDocument';
export const UPDATE_DOCUMENT_ENDPOINT = '/updateCmDocument';
export const UPDATE_MEASUREMENT_ENDPOINT = '/updateMeasurementById';

@Injectable()
export class DataService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  initializeDocument(): Observable<any> {
    return this.http.post<CmDocument>(this.apiUrl + DOCUMENT_ENDPOINT, {});
  }

  getCmDocumentById(id: string | null): Observable<any> {
    return this.http.get<CmDocument>(this.apiUrl + GET_DOCUMENT_ENDPOINT + '/' + id);
  }

  updateCmDocument(id: string, body: string): Observable<any> {
    return this.http.post<CmDocument>(this.apiUrl + UPDATE_DOCUMENT_ENDPOINT + '/' + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  updateMeasurementById(id: string, body: string): Observable<any> {
    return this.http.post<Measurement>(this.apiUrl + UPDATE_MEASUREMENT_ENDPOINT + '/' + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  getMeasurementById(id: string | null): Observable<any> {
    return this.http.get<Measurement>(this.apiUrl + '/getMeasurementById/' + id);
  }
}
