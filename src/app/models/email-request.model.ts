import {JsonObject, JsonProperty} from 'json2typescript';
import {Deserializable} from './deserializable.model';

export interface IEmailRequestJson {
  to: string;
  dosageConfirmationId: string;
  cmDocumentId: string;
}

@JsonObject('EmailRequest')
export class EmailRequestJson implements Deserializable, IEmailRequestJson {
  @JsonProperty('to', String) private _to: string = '';
  @JsonProperty('dosageConfirmationId', String) private _dosageConfirmationId: string = '';
  @JsonProperty('cmDocumentId', String) private _cmDocumentId: string = '';

  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }


  get to(): string {
    return this._to;
  }

  set to(value: string) {
    this._to = value;
  }

  get dosageConfirmationId(): string {
    return this._dosageConfirmationId;
  }

  set dosageConfirmationId(value: string) {
    this._dosageConfirmationId = value;
  }

  get cmDocumentId(): string {
    return this._cmDocumentId;
  }

  set cmDocumentId(value: string) {
    this._cmDocumentId = value;
  }

  toJSON() {
    return {
      to: this._to,
      dosageConfirmationId: this._dosageConfirmationId,
      cmDocumentId: this._cmDocumentId
    };
  }
}
