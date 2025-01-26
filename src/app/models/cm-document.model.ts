import { JsonObject, JsonProperty } from 'json2typescript';
import {Deserializable} from "./deserializable.model";

@JsonObject('CmDocument')
export class CmDocument implements Deserializable {

  @JsonProperty('id', Number)
  id: number = 0;
  @JsonProperty('firstname', String)
  firstname?: string = '';
  @JsonProperty('lastname', String)
  lastname?: string = '';
  @JsonProperty('phone', String)
  phone?: string = '';
  @JsonProperty('email', String)
  email?: string = '';
  @JsonProperty('address', String)
  address?: string = '';
  @JsonProperty('city', String)
  city?: string = '';
  @JsonProperty('zip', String)
  zip?: string = '';
  @JsonProperty('country', String)
  country?: string = '';

  deserialize(input: any) {
    Object.assign(this, input);
    return this;
  }
}



