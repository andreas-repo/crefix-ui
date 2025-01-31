// data.service.ts

import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {catchError, Observable} from 'rxjs';
import {CmDocument} from '../models/cm-document.model';

export const DOCUMENT_ENDPOINT = '/createCmDocument';
export const GET_DOCUMENT_ENDPOINT = '/getCmDocument';
export const UPDATE_DOCUMENT_ENDPOINT = '/updateCmDocument';
export const USER_DATA_ENDPOINT = '/save-user-data';
export const JOB_SITE_ENDPOINT = '/save-job-site-data';

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

  updateCmDocument(id: string,body: string): Observable<any> {
    return this.http.post<CmDocument>(this.apiUrl + UPDATE_DOCUMENT_ENDPOINT + '/' + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  saveUserData(body: string): Observable<any> {
    return this.http.post<CmDocument>(this.apiUrl + USER_DATA_ENDPOINT, body, {headers: {'Content-Type': 'application/json'}});
  }

  saveJobSiteData(body: string): Observable<any> {
    return this.http.post<CmDocument>(this.apiUrl + JOB_SITE_ENDPOINT, body, {headers: {'Content-Type': 'application/json'}});
  }

  saveMeasurementOne(body: string) {
    return this.http.post<CmDocument>(this.apiUrl + '/save-measurement-one', body, {headers: {'Content-Type': 'application/json'}});
  }
}
