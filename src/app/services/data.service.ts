// data.service.ts

import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICmDocumentJson} from '../models/cm-document.model';
import {IMeasurementJson} from '../models/measurement.model';

export const DOCUMENT_ENDPOINT = '/createCmDocument';
export const GET_DOCUMENT_ENDPOINT = '/getCmDocument';
export const UPDATE_DOCUMENT_ENDPOINT = '/updateCmDocument';
export const UPDATE_MEASUREMENT_ENDPOINT = '/updateMeasurementById';
export const UPDATE_MEASUREMENT_ARCHIVED_FILE_ID_ENDPOINT = '/updateMeasurementArchivedFileId';
export const GET_MEASUREMENT_BY_ID_ENDPOINT = '/getMeasurementById';
export const CREATE_CM_DOSAGE_CONFIRMATION = '/createCmDosageConfirmation';
export const GET_CM_DOSAGE_CONFIRMATION = '/getCmDosageConfirmation/';
export const UPDATE_CM_DOSAGE_CONFIRMATION = '/updateCmDosageConfirmation/';

@Injectable()
export class DataService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  initializeDocument(): Observable<ICmDocumentJson> {
    return this.http.post<ICmDocumentJson>(this.apiUrl + DOCUMENT_ENDPOINT, {});
  }

  getCmDocumentById(id: string | null): Observable<ICmDocumentJson> {
    return this.http.get<ICmDocumentJson>(this.apiUrl + GET_DOCUMENT_ENDPOINT + '/' + id);
  }

  updateCmDocument(id: string, body: string): Observable<ICmDocumentJson> {
    return this.http.post<ICmDocumentJson>(this.apiUrl + UPDATE_DOCUMENT_ENDPOINT + '/' + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  updateMeasurementById(id: string, body: string): Observable<IMeasurementJson> {
    return this.http.post<IMeasurementJson>(this.apiUrl + UPDATE_MEASUREMENT_ENDPOINT + '/' + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  getMeasurementById(id: string | undefined): Observable<IMeasurementJson> {
    return this.http.get<IMeasurementJson>(this.apiUrl + GET_MEASUREMENT_BY_ID_ENDPOINT + '/' + id);
  }

  updateMeasurementPictureById(id: string | undefined, body: string): Observable<IMeasurementJson> {
    return this.http.post<IMeasurementJson>(this.apiUrl + UPDATE_MEASUREMENT_ARCHIVED_FILE_ID_ENDPOINT + '/' + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  initializeDcForm(): Observable<any> {
    return this.http.post<any>(this.apiUrl + CREATE_CM_DOSAGE_CONFIRMATION, {});
  }

  updateDcForm(id: string, body: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + UPDATE_CM_DOSAGE_CONFIRMATION + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  getDcFormById(id: string | null): Observable<any> {
    return this.http.get<any>(this.apiUrl + GET_CM_DOSAGE_CONFIRMATION + id);
  }

  sendCmDocumentInvitation(body: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/mail/send', body, {headers: {'Content-Type': 'application/json'}});
  }

  getHeatingProtocolConfirmationById(id: string | null): Observable<any> {
    return this.http.get<any>(this.apiUrl + "/getHeatingProtocol/" + id);
  }

  createHeatingProtocol(body: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/createHeatingProtocol", body, {headers: {'Content-Type': 'application/json'}});
  }

  updateHeatingProtocol(id: string, body: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + "/updateHeatingProtocol/" + id, body, {headers: {'Content-Type': 'application/json'}});
  }

  sendHeatingProtocolConfirmationInvitation(body: string): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/mail/plumber/send', body, {headers: {'Content-Type': 'application/json'}});
  }
}
