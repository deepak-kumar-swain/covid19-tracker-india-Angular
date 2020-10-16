import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AllCountryData} from '../interface/allCountryData.interface';
import {Observable} from 'rxjs';
import {UpdateData} from '../interface/updateData.interface';
import {AllStatesData} from '../interface/allStatesData.interface';
import {CountryHistoricalData} from '../interface/countryHisoricalData.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  allCountryData(): Observable<AllCountryData> {
    return this.http.get<AllCountryData>(`https://corona.lmao.ninja/v2/countries?yesterday=&sort=`);
  }

  allStatesData(): Observable<AllStatesData> {
    return this.http.get<AllStatesData>(`https://api.covid19india.org/v4/min/data.min.json`);
  }

  districtWiseData(): Observable<AllStatesData> {
    return this.http.get<AllStatesData>(`https://api.covid19india.org/state_district_wise.json`);
  }

  newUpdates(): Observable<UpdateData> {
    return this.http.get<UpdateData>(`https://api.covid19india.org/updatelog/log.json`);
  }

  countryHistorical(): Observable<CountryHistoricalData> {
    return this.http.get<CountryHistoricalData>(`https://corona.lmao.ninja/v2/historical/india?lastdays=30`);
  }
}
