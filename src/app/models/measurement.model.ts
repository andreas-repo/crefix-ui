import {JsonObject, JsonProperty} from 'json2typescript';
import {Deserializable} from './deserializable.model';

@JsonObject('Measurement')
export class Measurement implements Deserializable {

  @JsonProperty('floor', String)
  floor?: string = '';
  @JsonProperty('layedAt', String)
  layedAt?: string = '';
  @JsonProperty('dateOfMeasurement', String)
  dateOfMeasurement?: string = '';
  @JsonProperty('initialWeight', String)
  initialWeight?: string = '';
  @JsonProperty('pressureGaugeDisplay', String)
  pressureGaugeDisplay?: string = '';
  @JsonProperty('cmValue', String)
  cmValue?: string = '';
  @JsonProperty('temperature', String)
  temperature?: string = '';
  @JsonProperty('humidity', String)
  humidity?: string = '';
  @JsonProperty('surfaceTemperature', String)
  surfaceTemperature?: string = '';
  @JsonProperty('installationThickness', String)
  installationThickness?: string = '';
  @JsonProperty('underfloorHeating', String)
  underfloorHeating?: string = '';
  @JsonProperty('readyAccordingOfTechnicalDatasheet', String)
  readyAccordingOfTechnicalDatasheet?: string = '';

  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }
}
