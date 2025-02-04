import { Component, OnInit } from '@angular/core';
// import {GoogleChartInterface, RegionClickEvent} from 'ng2-google-charts';
import { ApiService } from '../services/api.service';
import { AllCountryData } from '../interface/allCountryData.interface';
import { AllStatesData } from '../interface/allStatesData.interface';
import { CountryHistoricalData } from '../interface/countryHisoricalData.interface';
import { UpdateData } from '../interface/updateData.interface';
import { faClock } from '@fortawesome/free-solid-svg-icons';
// import { Platform } from '@angular/cdk/platform';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: false
})
export class HomeComponent implements OnInit {
  isoStates = [
    { name: 'Andhra Pradesh', value: 'IN-AP', short: 'AP', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Arunachal Pradesh', value: 'IN-AP', short: 'AR', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Assam', value: 'IN-AS', short: 'AS', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Bihar', value: 'IN-BR', short: 'BR', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Chhattisgarh', value: 'IN-CT', short: 'CT', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Goa', value: 'IN-GA', short: 'GA', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Gujarat', value: 'IN-GJ', short: 'GJ', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Haryana', value: 'IN-HR', short: 'HR', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Himachal Pradesh', value: 'IN-HP', short: 'HP', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Jharkhand', value: 'IN-JH', short: 'JH', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Karnataka', value: 'IN-KA', short: 'KA', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Kerala', value: 'IN-KL', short: 'KL', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Madhya Pradesh', value: 'IN-MP', short: 'MP', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Maharashtra', value: 'IN-MH', short: 'MH', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Manipur', value: 'IN-MN', short: 'MN', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Meghalaya', value: 'IN-ML', short: 'ML', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Mizoram', value: 'IN-MZ', short: 'MZ', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Nagaland', value: 'IN-NL', short: 'NL', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Orissa', value: 'IN-OR', short: 'OR', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Punjab', value: 'IN-PB', short: 'PB', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Rajasthan', value: 'IN-RJ', short: 'RJ', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Sikkim', value: 'IN-SK', short: 'SK', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Tamil Nadu', value: 'IN-TN', short: 'TN', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Telangana', value: 'IN-TL', short: 'TL', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Tripura', value: 'IN-TR', short: 'TR', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Uttarakhand', value: 'IN-UT', short: 'UT', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Uttar Pradesh', value: 'IN-UP', short: 'UP', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'West Bengal', value: 'IN-WB', short: 'WB', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Andaman and Nicobar Islands', value: 'IN-AN', short: 'AN', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Chandigarh', value: 'IN-CH', short: 'CH', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Dadra and Nagar Haveli', value: 'IN-DN', short: 'DN', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Daman and Diu', value: 'IN-DD', short: 'DD', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Delhi', value: 'IN-DL', short: 'DL', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Jammu and Kashmir', value: 'IN-JK', short: 'JK', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Ladakh', value: 'IN-LA', short: 'LA', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Lakshadweep', value: 'IN-LD', short: 'LD', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } },
    { name: 'Puducherry', value: 'IN-PY', short: 'PY', data: { total: { confirmed: 0, recovered: 0, tested: 0, deceased: 0 } } }
  ];
  allCountryData: AllCountryData;
  allStatesData: AllStatesData;
  countryHistoricalData: any = [];
  newsUpdateData: UpdateData;
  statesData = [
    ['State', 'COVID-Confirmed Cases'],
    ['', 180]
  ];
  casesData = [
    ['Date', 'Confirmed', 'Recovered', 'Deceased'],
    ['', 0, 0, 0]
  ];
  // geoChart: GoogleChartInterface = {
  //   chartType: 'GeoChart',
  //   dataTable: this.statesData,
  //   options: {
  //     region: 'IN', // INDIA
  //     displayMode: 'regions',
  //     colorAxis: { colors: ['#e7e5e5', '#8a8989'] },
  //     resolution: 'provinces',
  //     backgroundColor: 'white',
  //     datalessRegionColor: '#fefefe',
  //     defaultColor: '#ececec',
  //     height: 450,
  //   },
  // };
  // lineChart: GoogleChartInterface = {
  //   chartType: this.platform.ANDROID || this.platform.IOS ? 'LineChart' : 'Line',
  //   dataTable: this.casesData,
  //   options: {
  //     title: 'Cases count',
  //     series: {
  //       0: { color: '#ff073a' },
  //       1: { color: '#28a745' },
  //       2: { color: '#6c757d' },
  //     },
  //     legend: 'none',
  //     width: 400
  //   }
  // };
  faCoffee = faClock;
  mapReady = false;
  isActiveConfirmed = false;
  isActiveActive = false;
  isActiveRecovered = false;
  isActiveDeceased = true;
  confirmedDelta: string;
  confirmedTotal: string;
  activeDelta: string;
  activeTotal: string;
  recoveredDelta: string;
  recoveredTotal: string;
  deceasedDelta: string;
  deceasedTotal: string;
  allData = [];

  constructor(
    private readonly apiService: ApiService,
    // public platform: Platform
  ) { }

  ngOnInit(): void {
    console.log(navigator.userAgent);
    setInterval(() => {
      this.fetchTextData();
    }, 30000);
    this.fetchData();
    this.fetchHistoricalData();
    this.fetchUpdated();
    // this.geoChart = {
    //   chartType: 'GeoChart',
    //   dataTable: this.statesData,
    //   options: {
    //     region: 'IN', // INDIA
    //     displayMode: 'regions',
    //     colorAxis: { colors: ['#e7e5e5', '#8a8989'] },
    //     resolution: 'provinces',
    //     backgroundColor: 'white',
    //     datalessRegionColor: '#fefefe',
    //     defaultColor: '#ececec',
    //     height: 450,
    //   },
    // };
    this.mapReady = true;
  }

  fetchTextData(): void {
    this.apiService.allStatesData().subscribe(async (resS: AllStatesData) => {
      this.confirmedDelta = resS.TT.delta.confirmed.toString();
      this.confirmedTotal = resS.TT.total.confirmed.toString();
      this.activeDelta = '';
      this.activeTotal = resS.TT.total.tested.toString();
      this.recoveredDelta = resS.TT.delta.recovered.toString();
      this.recoveredTotal = resS.TT.total.recovered.toString();
      this.deceasedDelta = resS.TT.delta.deceased.toString();
      this.deceasedTotal = resS.TT.total.deceased.toString();
    });
  }

  fetchData(): void {
    this.statesData = [['State', 'COVID-Confirmed Cases']];
    // this.geoChart.dataTable = this.statesData;
    // if (this.geoChart.component !== undefined) {
    //   this.geoChart.component.draw();
    // }
    this.apiService.allCountryData().subscribe((res: AllCountryData) => {
      this.allCountryData = res;
      this.apiService.allStatesData().subscribe(async (resS: AllStatesData) => {
        this.confirmedDelta = resS.TT.delta.confirmed.toString();
        this.confirmedTotal = resS.TT.total.confirmed.toString();
        this.activeDelta = '';
        this.activeTotal = resS.TT.total.tested.toString();
        this.recoveredDelta = resS.TT.delta.recovered.toString();
        this.recoveredTotal = resS.TT.total.recovered.toString();
        this.deceasedDelta = resS.TT.delta.deceased.toString();
        this.deceasedTotal = resS.TT.total.deceased.toString();
        for (let j = 0; j < Object.keys(this.isoStates).length; j++) {
          for (let i = 0; i < Object.keys(resS).length; i++) {
            await this.allData.push(resS[Object.keys(resS)[i]]);
            if (Object.keys(resS)[i] === this.isoStates[j].short) {
              this.isoStates[j].data = await resS[Object.keys(resS)[i]];
            }
          }
        }
        setTimeout(async () => {
          for (let i = 0; i < Object.keys(this.isoStates).length; i++) {
            if (this.isActiveConfirmed) {
              await this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.confirmed]);
            } else if (this.isActiveRecovered) {
              await this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.recovered]);
            } else if (this.isActiveDeceased) {
              await this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.deceased]);
            } else if (this.isActiveActive) {
              await this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.tested]);
            }
          }
          // await this.geoChart.component.draw();
        }, 1000);
      });
    });
  }

  fetchHistoricalData(): void {
    this.apiService.countryHistorical().subscribe((res: CountryHistoricalData) => {
      for (let i = 0; i < Object.keys(res.timeline.cases).length; i++) {
        this.casesData.push(
          [new Date(Object.keys(res.timeline.cases)[i]).toDateString(),
          Object.values(res.timeline.cases)[i],
          Object.values(res.timeline.recovered)[i], Object.values(res.timeline.deaths)[i]]);
      }
      // this.lineChart.component.draw();
    });
  }

  fetchUpdated(): void {
    this.apiService.newUpdates().subscribe((res: UpdateData) => {
      this.newsUpdateData = res;
    });
  }

  // onClickRegion(event: RegionClickEvent): void {
  //   console.log(event);
  // }

  selectSection(sec): void {
    switch (sec) {
      case 1:
        this.isActiveConfirmed = true;
        this.isActiveActive = false;
        this.isActiveRecovered = false;
        this.isActiveDeceased = false;
        // this.geoChart.options.colorAxis = { colors: ['#f1bcc7', '#ff0537'] };
        this.fetchData();
        for (let i = 0; i < Object.keys(this.isoStates).length; i++) {
          this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.confirmed]);
        }
        // this.geoChart.component.draw();
        break;
      case 2:
        this.isActiveConfirmed = false;
        this.isActiveActive = true;
        this.isActiveRecovered = false;
        this.isActiveDeceased = false;
        // this.geoChart.options.colorAxis = { colors: ['#bccff1', '#397cef'] };
        this.fetchData();
        for (let i = 0; i < Object.keys(this.isoStates).length; i++) {
          this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.tested]);
        }
        // this.geoChart.component.draw();
        break;
      case 3:
        this.isActiveConfirmed = false;
        this.isActiveActive = false;
        this.isActiveRecovered = true;
        this.isActiveDeceased = false;
        // this.geoChart.options.colorAxis = { colors: ['#c6f1bc', '#4af537'] };
        this.fetchData();
        for (let i = 0; i < Object.keys(this.isoStates).length; i++) {
          this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.recovered]);
        }
        // this.geoChart.component.draw();
        break;
      case 4:
        this.isActiveConfirmed = false;
        this.isActiveActive = false;
        this.isActiveRecovered = false;
        this.isActiveDeceased = true;
        // this.geoChart.options.colorAxis = { colors: ['#e7e5e5', '#8a8989'] };
        this.fetchData();
        for (let i = 0; i < Object.keys(this.isoStates).length; i++) {
          this.statesData.push([this.isoStates[i].name, this.isoStates[i].data.total.deceased]);
        }
        // this.geoChart.component.draw();
        break;
    }
  }

}
