import {JsonObject, JsonProperty} from 'json2typescript';
import {Deserializable} from './deserializable.model';

export interface IMeasurementJson {
  id?: string;
  floor?: string;
  layedAt?: string;
  dateOfMeasurement?: string;
  initialWeight?: string;
  pressureGaugeDisplay?: string;
  cmValue?: string;
  temperature?: string;
  humidity?: string;
  surfaceTemperature?: string;
  installationThickness?: string;
  underfloorHeating?: string;
  readyAccordingOfTechnicalDatasheet?: string;
  archivedFileId?: string;
}

@JsonObject('Measurement')
export class MeasurementJson implements Deserializable, IMeasurementJson {

  @JsonProperty('id', String)
  id?: string = '';
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
  @JsonProperty('archivedFileId', String)
  archivedFileId?: string = '';

  deserialize(input: any) : this {
    Object.assign(this, input);
    return this;
  }
}
