import { JsonObject, JsonProperty } from 'json2typescript';
import {Deserializable} from "./deserializable.model";
import {IMeasurementJson, MeasurementJson} from './measurement.model';
import {input} from '@angular/core';

export interface ICmDocumentJson {
  id: string;
  documentId: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  email?: string;
  address?: string;
  city?: string;
  zip?: string;
  country?: string;
  measurements: IMeasurementJson[];
  measurementOneId?: string;
  measurementTwoId?: string;
  measurementThreeId?: string;
  measurementFourId?: string;
  crefixType?: string;
  dosage?: string;
  productType?: string;
  productMixRation?: string;
  userNote?: string;
}

@JsonObject('CmDocument')
export class CmDocumentJson implements Deserializable, ICmDocumentJson {
  @JsonProperty('id', String) private _id: string = '';
  @JsonProperty('documentId', String) private _documentId: string = '';
  @JsonProperty('firstname', String) private _firstname: string = '';
  @JsonProperty('lastname', String) private _lastname: string = '';
  @JsonProperty('phone', String) private _phone: string = '';
  @JsonProperty('email', String) private _email: string = '';
  @JsonProperty('address', String) private _address: string = '';
  @JsonProperty('city', String) private _city: string = '';
  @JsonProperty('zip', String) private _zip: string = '';
  @JsonProperty('country', String) private _country: string = '';

  @JsonProperty('measurements', [MeasurementJson]) private _measurements: MeasurementJson[] = [];

  @JsonProperty('measurement_one_id', String) private _measurementOneId: string = '';
  @JsonProperty('measurement_two_id', String) private _measurementTwoId: string = '';
  @JsonProperty('measurement_three_id', String) private _measurementThreeId: string = '';
  @JsonProperty('measurement_four_id', String) private _measurementFourId: string = '';

  @JsonProperty('crefix_type', String) private _crefixType: string = '';
  @JsonProperty('dosage', String) private _dosage: string = '';
  @JsonProperty('product_type', String) private _product: string = '';
  @JsonProperty('product_mix_ration', String) private _productMixRatio: string = '';
  @JsonProperty('user_note', String) private _userNote: string = '';



  deserialize(input: any) : this {
    Object.assign(this, input);
    this._measurements[0] = new CmDocumentJson().deserialize(input.measurementOne);
    this._measurements[1] = new CmDocumentJson().deserialize(input.measurementTwo);
    this._measurements[2] = new CmDocumentJson().deserialize(input.measurementThree);
    this._measurements[3] = new CmDocumentJson().deserialize(input.measurementFour);
    return this;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get documentId(): string {
    return this._documentId;
  }

  set documentId(value: string) {
    this._documentId = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get phone(): string {
    return this._phone;
  }

  set phone(value: string) {
    this._phone = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get zip(): string {
    return this._zip;
  }

  set zip(value: string) {
    this._zip = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get measurements(): MeasurementJson[] {
    return this._measurements;
  }

  set measurements(value: MeasurementJson[]) {
    this._measurements = value;
  }

  get measurementOneId(): string {
    return this._measurementOneId;
  }

  set measurementOneId(value: string) {
    this._measurementOneId = value;
  }

  get measurementTwoId(): string {
    return this._measurementTwoId;
  }

  set measurementTwoId(value: string) {
    this._measurementTwoId = value;
  }

  get measurementThreeId(): string {
    return this._measurementThreeId;
  }

  set measurementThreeId(value: string) {
    this._measurementThreeId = value;
  }

  get measurementFourId(): string {
    return this._measurementFourId;
  }

  set measurementFourId(value: string) {
    this._measurementFourId = value;
  }

  get crefixType(): string {
    return this._crefixType;
  }

  set crefixType(value: string) {
    this._crefixType = value;
  }

  get dosage(): string {
    return this._dosage;
  }

  set dosage(value: string) {
    this._dosage = value;
  }

  get product(): string {
    return this._product;
  }

  set product(value: string) {
    this._product = value;
  }

  get productMixRatio(): string {
    return this._productMixRatio;
  }

  set productMixRatio(value: string) {
    this._productMixRatio = value;
  }

  get userNote(): string {
    return this._userNote;
  }

  set userNote(value: string) {
    this._userNote = value;
  }
}



