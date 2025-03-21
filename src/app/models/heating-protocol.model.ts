import {JsonObject, JsonProperty} from 'json2typescript';
import {Deserializable} from './deserializable.model';

export interface IHeatingProtocolJson {
  id: string;
  heatingProtocolId: string;
  dcId: string;
  cmDocumentId: string;
  screedLayer: string;
  screedLayerEmail: string;
  screedLayerPhone: string;
  constructionProject: string;
  constructionSection: string;
  constructionDate: string;
  heaterManufacturer: string;
  beginningOfHeating: string;
  endOfHeating: string;
  confirmationAreaWasFree: boolean;
  dayOneConfirmationValue: string;
  dayTwoConfirmationValue: string;
  dayThreeConfirmationValue: string;
  dayFourToEightConfirmationValue: string;
  dayNineConfirmationValue: string;
  dayTenToElevenConfirmationValue: string;
  dayTwelveConfirmationValue: string;
  dayThirteenConfirmationValue: string;
  dayOneValueReadingTime: string;
  dayTwoValueReadingTime: string;
  dayThreeValueReadingTime: string;
  dayFourToEightValueReadingTime: string;
  dayNineValueReadingTime: string;
  dayTenToElevenValueReadingTime: string;
  dayTwelveValueReadingTime: string;
  dayThirteenValueReadingTime: string;
}

@JsonObject('HeatingProtocol')
export class HeatingProtocolJson implements Deserializable, IHeatingProtocolJson {
  @JsonProperty('id', String) private _id: string = '';
  @JsonProperty('heating_protocol_id', String) private _heatingProtocolId: string = '';
  @JsonProperty('dc_id', String) private _dcId: string = '';
  @JsonProperty('cm_document_id', String) private _cmDocumentId: string = '';
  @JsonProperty('screed_layer', String) private _screedLayer: string = '';
  @JsonProperty('screed_layer_email', String) private _screedLayerEmail: string = '';
  @JsonProperty('screed_layer_phone', String) private _screedLayerPhone: string = '';
  @JsonProperty('construction_project', String) private _constructionProject: string = '';
  @JsonProperty('construction_section', String) private _constructionSection: string = '';
  @JsonProperty('construction_date', String) private _constructionDate: string = '';
  @JsonProperty('heater_manufacturer', String) private _heaterManufacturer: string = '';
  @JsonProperty('beginning_of_heating', String) private _beginningOfHeating: string = '';
  @JsonProperty('end_of_heating', String) private _endOfHeating: string = '';
  @JsonProperty('confirmation_area_was_free', Boolean) private _confirmationAreaWasFree: boolean = false;
  @JsonProperty('day_one_confirmation_value', String) private _dayOneConfirmationValue: string = '';
  @JsonProperty('day_two_confirmation_value', String) private _dayTwoConfirmationValue: string = '';
  @JsonProperty('day_three_confirmation_value', String) private _dayThreeConfirmationValue: string = '';
  @JsonProperty('day_four_to_eight_confirmation_value', String) private _dayFourToEightConfirmationValue: string = '';
  @JsonProperty('day_nine_confirmation_value', String) private _dayNineConfirmationValue: string = '';
  @JsonProperty('day_ten_to_eleven_confirmation_value', String) private _dayTenToElevenConfirmationValue: string = '';
  @JsonProperty('day_twelve_confirmation_value', String) private _dayTwelveConfirmationValue: string = '';
  @JsonProperty('day_thirteen_confirmation_value', String) private _dayThirteenConfirmationValue: string = '';
  @JsonProperty('day_one_value_reading_time', String) private _dayOneValueReadingTime: string = '';
  @JsonProperty('day_two_value_reading_time', String) private _dayTwoValueReadingTime: string = '';
  @JsonProperty('day_three_value_reading_time', String) private _dayThreeValueReadingTime: string = '';
  @JsonProperty('day_four_to_eight_value_reading_time', String) private _dayFourToEightValueReadingTime: string = '';
  @JsonProperty('day_nine_value_reading_time', String) private _dayNineValueReadingTime: string = '';
  @JsonProperty('day_ten_to_eleven_value_reading_time', String) private _dayTenToElevenValueReadingTime: string = '';
  @JsonProperty('day_twelve_value_reading_time', String) private _dayTwelveValueReadingTime: string = '';
  @JsonProperty('day_thirteen_value_reading_time', String) private _dayThirteenValueReadingTime: string = '';

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

  get heatingProtocolId(): string {
    return this._heatingProtocolId;
  }

  set heatingProtocolId(value: string) {
    this._heatingProtocolId = value;
  }

  get dcId(): string {
    return this._dcId;
  }

  set dcId(value: string) {
    this._dcId = value;
  }

  get cmDocumentId(): string {
    return this._cmDocumentId;
  }

  set cmDocumentId(value: string) {
    this._cmDocumentId = value;
  }

  get screedLayer(): string {
    return this._screedLayer;
  }

  set screedLayer(value: string) {
    this._screedLayer = value;
  }

  get screedLayerEmail(): string {
    return this._screedLayerEmail;
  }

  set screedLayerEmail(value: string) {
    this._screedLayerEmail = value;
  }

  get screedLayerPhone(): string {
    return this._screedLayerPhone;
  }

  set screedLayerPhone(value: string) {
    this._screedLayerPhone = value;
  }

  get constructionProject(): string {
    return this._constructionProject;
  }

  set constructionProject(value: string) {
    this._constructionProject = value;
  }

  get constructionSection(): string {
    return this._constructionSection;
  }

  set constructionSection(value: string) {
    this._constructionSection = value;
  }

  get constructionDate(): string {
    return this._constructionDate;
  }

  set constructionDate(value: string) {
    this._constructionDate = value;
  }

  get heaterManufacturer(): string {
    return this._heaterManufacturer;
  }

  set heaterManufacturer(value: string) {
    this._heaterManufacturer = value;
  }

  get beginningOfHeating(): string {
    return this._beginningOfHeating;
  }

  set beginningOfHeating(value: string) {
    this._beginningOfHeating = value;
  }

  get endOfHeating(): string {
    return this._endOfHeating;
  }

  set endOfHeating(value: string) {
    this._endOfHeating = value;
  }

  get confirmationAreaWasFree(): boolean {
    return this._confirmationAreaWasFree;
  }

  set confirmationAreaWasFree(value: boolean) {
    this._confirmationAreaWasFree = value;
  }

  get dayOneConfirmationValue(): string {
    return this._dayOneConfirmationValue;
  }

  set dayOneConfirmationValue(value: string) {
    this._dayOneConfirmationValue = value;
  }

  get dayTwoConfirmationValue(): string {
    return this._dayTwoConfirmationValue;
  }

  set dayTwoConfirmationValue(value: string) {
    this._dayTwoConfirmationValue = value;
  }

  get dayThreeConfirmationValue(): string {
    return this._dayThreeConfirmationValue;
  }

  set dayThreeConfirmationValue(value: string) {
    this._dayThreeConfirmationValue = value;
  }

  get dayFourToEightConfirmationValue(): string {
    return this._dayFourToEightConfirmationValue;
  }

  set dayFourToEightConfirmationValue(value: string) {
    this._dayFourToEightConfirmationValue = value;
  }

  get dayNineConfirmationValue(): string {
    return this._dayNineConfirmationValue;
  }

  set dayNineConfirmationValue(value: string) {
    this._dayNineConfirmationValue = value;
  }

  get dayTenToElevenConfirmationValue(): string {
    return this._dayTenToElevenConfirmationValue;
  }

  set dayTenToElevenConfirmationValue(value: string) {
    this._dayTenToElevenConfirmationValue = value;
  }

  get dayTwelveConfirmationValue(): string {
    return this._dayTwelveConfirmationValue;
  }

  set dayTwelveConfirmationValue(value: string) {
    this._dayTwelveConfirmationValue = value;
  }

  get dayThirteenConfirmationValue(): string {
    return this._dayThirteenConfirmationValue;
  }

  set dayThirteenConfirmationValue(value: string) {
    this._dayThirteenConfirmationValue = value;
  }

  get dayOneValueReadingTime(): string {
    return this._dayOneValueReadingTime;
  }

  set dayOneValueReadingTime(value: string) {
    this._dayOneValueReadingTime = value;
  }

  get dayTwoValueReadingTime(): string {
    return this._dayTwoValueReadingTime;
  }

  set dayTwoValueReadingTime(value: string) {
    this._dayTwoValueReadingTime = value;
  }

  get dayThreeValueReadingTime(): string {
    return this._dayThreeValueReadingTime;
  }

  set dayThreeValueReadingTime(value: string) {
    this._dayThreeValueReadingTime = value;
  }

  get dayFourToEightValueReadingTime(): string {
    return this._dayFourToEightValueReadingTime;
  }

  set dayFourToEightValueReadingTime(value: string) {
    this._dayFourToEightValueReadingTime = value;
  }

  get dayNineValueReadingTime(): string {
    return this._dayNineValueReadingTime;
  }

  set dayNineValueReadingTime(value: string) {
    this._dayNineValueReadingTime = value;
  }

  get dayTenToElevenValueReadingTime(): string {
    return this._dayTenToElevenValueReadingTime;
  }

  set dayTenToElevenValueReadingTime(value: string) {
    this._dayTenToElevenValueReadingTime = value;
  }

  get dayTwelveValueReadingTime(): string {
    return this._dayTwelveValueReadingTime;
  }

  set dayTwelveValueReadingTime(value: string) {
    this._dayTwelveValueReadingTime = value;
  }

  get dayThirteenValueReadingTime(): string {
    return this._dayThirteenValueReadingTime;
  }

  set dayThirteenValueReadingTime(value: string) {
    this._dayThirteenValueReadingTime = value;
  }
}
