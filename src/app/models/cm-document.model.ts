import { JsonObject, JsonProperty } from 'json2typescript';
import {Deserializable} from "./deserializable.model";
import {Measurement} from './measurement.model';

@JsonObject('CmDocument')
export class CmDocument implements Deserializable {
  @JsonProperty('id', Number)
  id: number = 0;
  @JsonProperty('documentId', Number)
  document_id: number = 0;
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

  @JsonProperty('measurements', [Measurement])
  measurements: Measurement[] = [];
  /*@JsonProperty('measurementOne', JsonObject)
  measurementOne?: Measurement = new Measurement();
  @JsonProperty('measurementTwo', JsonObject)
  measurementTwo?: Measurement = new Measurement();
  @JsonProperty('measurementThree', JsonObject)
  measurementThree?: Measurement = new Measurement();
  @JsonProperty('measurementFour', JsonObject)
  measurementFour?: Measurement = new Measurement();*/

  deserialize(input: any) : this {
    Object.assign(this, input);
    this.measurements[0] = new Measurement().deserialize(input.measurementOne);
    this.measurements[1] = new Measurement().deserialize(input.measurementTwo);
    this.measurements[2] = new Measurement().deserialize(input.measurementThree);
    this.measurements[3] = new Measurement().deserialize(input.measurementFour);
    return this;
  }
}



