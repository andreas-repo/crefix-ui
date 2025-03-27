import {JsonObject, JsonProperty} from 'json2typescript';
import {Deserializable} from './deserializable.model';
import {input} from '@angular/core';

export interface ICrefixProductJson {
  id: string;
  crefixProductName?: string;
}

@JsonObject('CrefixProduct')
export class CrefixProductJson implements Deserializable, ICrefixProductJson {
  @JsonProperty('id', String) private _id: string = '';
  @JsonProperty('crefixProductName', String) private _crefixProductName: string = '';

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

  get crefixProductName(): string {
    return this._crefixProductName;
  }

  set crefixProductName(value: string) {
    this._crefixProductName = value;
  }
}
