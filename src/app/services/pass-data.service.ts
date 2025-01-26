import {Injectable} from '@angular/core';
import {CmDocument} from '../models/cm-document.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassDataService {
  private cmDocument = new BehaviorSubject(new CmDocument());
  getCmDocument = this.cmDocument.asObservable();

  constructor() {
  }

  setCmDocumentObject(cmDocument: CmDocument) {
    this.cmDocument.next(cmDocument);
  }
}
