import {JsonObject, JsonProperty} from 'json2typescript';
import {Deserializable} from './deserializable.model';

export interface IDosageConfirmationFormJson {
  id: string;
  dosageConfirmationId: string;
  screedCompany: string;
  jobSiteAddress: string;
  jobSiteCity: string;
  jobSiteZip: string;
  jobSiteCountry: string;
  contactPerson: string;
  contactPersonPhone: string;
  contactPersonEmail: string;
  appointmentDate: string;
  appointmentTime: string;
  screedConstructionFrom: string;
  screedConstructionUntil: string;
  screedConstructionArea: string;
  screedConstructionThickness: string;
  hasUnderfloorHeating: boolean;
  measurementPoint: boolean;
  producerOfCement: string;
  sandGradingLine: string;
  crefixProductAmountPerMix: string;
  digitalSignature: string;
  receivedDigitalSignature: boolean;
}

@JsonObject('CmDosageConfirmation')
export class CmDosageConfirmationJson implements Deserializable, IDosageConfirmationFormJson {
  @JsonProperty('id', String)
  _id: string = '';
  @JsonProperty('dosageConfirmationId', String)
  _dosageConfirmationId: string = '';
  @JsonProperty('screedCompany', String)
  _screedCompany: string = '';
  @JsonProperty('jobSiteAddress', String)
  _jobSiteAddress: string = '';
  @JsonProperty('jobSiteCity', String)
  _jobSiteCity: string = '';
  @JsonProperty('jobSiteZip', String)
  _jobSiteZip: string = '';
  @JsonProperty('jobSiteCountry', String)
  _jobSiteCountry: string = '';
  @JsonProperty('contactPerson', String)
  _contactPerson: string = '';
  @JsonProperty('contactPersonPhone', String)
  _contactPersonPhone: string = '';
  @JsonProperty('contactPersonEmail', String)
  _contactPersonEmail: string = '';
  @JsonProperty('appointmentDate', String)
  _appointmentDate: string = '';
  @JsonProperty('appointmentTime', String)
  _appointmentTime: string = '';
  @JsonProperty('screedConstructionFrom', String)
  _screedConstructionFrom: string = '';
  @JsonProperty('screedConstructionUntil', String)
  _screedConstructionUntil: string = '';
  @JsonProperty('screedConstructionArea', String)
  _screedConstructionArea: string = '';
  @JsonProperty('screedConstructionThickness', String)
  _screedConstructionThickness: string = '';
  @JsonProperty('hasUnderfloorHeating', String)
  _hasUnderfloorHeating: boolean = false;
  @JsonProperty('measuringPoint', String)
  _measurementPoint: boolean = false;
  @JsonProperty('producerOfCement', String)
  _producerOfCement: string = '';
  @JsonProperty('sandGradingLine', String)
  _sandGradingLine: string = '';
  @JsonProperty('crefixProductAmountPerMix', String)
  _crefixProductAmountPerMix: string = '';
  @JsonProperty('digitalSignature', String)
  _digitalSignature: string = '';
  @JsonProperty('receivedDigitalSignature', String)
  _receivedDigitalSignature: boolean = false;

  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get dosageConfirmationId(): string {
    return this._dosageConfirmationId;
  }

  set dosageConfirmationId(value: string) {
    this._dosageConfirmationId = value;
  }

  get screedCompany(): string {
    return this._screedCompany;
  }

  set screedCompany(value: string) {
    this._screedCompany = value;
  }

  get jobSiteAddress(): string {
    return this._jobSiteAddress;
  }

  set jobSiteAddress(value: string) {
    this._jobSiteAddress = value;
  }

  get jobSiteCity(): string {
    return this._jobSiteCity;
  }

  set jobSiteCity(value: string) {
    this._jobSiteCity = value;
  }

  get jobSiteZip(): string {
    return this._jobSiteZip;
  }

  set jobSiteZip(value: string) {
    this._jobSiteZip = value;
  }

  get jobSiteCountry(): string {
    return this._jobSiteCountry;
  }

  set jobSiteCountry(value: string) {
    this._jobSiteCountry = value;
  }

  get contactPerson(): string {
    return this._contactPerson;
  }

  set contactPerson(value: string) {
    this._contactPerson = value;
  }

  get contactPersonPhone(): string {
    return this._contactPersonPhone;
  }

  set contactPersonPhone(value: string) {
    this._contactPersonPhone = value;
  }

  get contactPersonEmail(): string {
    return this._contactPersonEmail;
  }

  set contactPersonEmail(value: string) {
    this._contactPersonEmail = value;
  }

  get appointmentDate(): string {
    return this._appointmentDate;
  }

  set appointmentDate(value: string) {
    this._appointmentDate = value;
  }

  get appointmentTime(): string {
    return this._appointmentTime;
  }

  set appointmentTime(value: string) {
    this._appointmentTime = value;
  }

  get screedConstructionFrom(): string {
    return this._screedConstructionFrom;
  }

  set screedConstructionFrom(value: string) {
    this._screedConstructionFrom = value;
  }

  get screedConstructionUntil(): string {
    return this._screedConstructionUntil;
  }

  set screedConstructionUntil(value: string) {
    this._screedConstructionUntil = value;
  }

  get screedConstructionArea(): string {
    return this._screedConstructionArea;
  }

  set screedConstructionArea(value: string) {
    this._screedConstructionArea = value;
  }

  get screedConstructionThickness(): string {
    return this._screedConstructionThickness;
  }

  set screedConstructionThickness(value: string) {
    this._screedConstructionThickness = value;
  }

  get hasUnderfloorHeating(): boolean {
    return this._hasUnderfloorHeating;
  }

  set hasUnderfloorHeating(value: boolean) {
    this._hasUnderfloorHeating = value;
  }

  get measurementPoint(): boolean {
    return this._measurementPoint;
  }

  set measurementPoint(value: boolean) {
    this._measurementPoint = value;
  }

  get producerOfCement(): string {
    return this._producerOfCement;
  }

  set producerOfCement(value: string) {
    this._producerOfCement = value;
  }

  get sandGradingLine(): string {
    return this._sandGradingLine;
  }

  set sandGradingLine(value: string) {
    this._sandGradingLine = value;
  }

  get crefixProductAmountPerMix(): string {
    return this._crefixProductAmountPerMix;
  }

  set crefixProductAmountPerMix(value: string) {
    this._crefixProductAmountPerMix = value;
  }

  get digitalSignature(): string {
    return this._digitalSignature;
  }

  set digitalSignature(value: string) {
    this._digitalSignature = value;
  }

  get receivedDigitalSignature(): boolean {
    return this._receivedDigitalSignature;
  }

  set receivedDigitalSignature(value: boolean) {
    this._receivedDigitalSignature = value;
  }
}
