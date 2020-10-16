import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home.route';
import {HomeComponent} from './home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Ng2GoogleChartsModule} from 'ng2-google-charts';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    homeRouting,
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    Ng2GoogleChartsModule,
    FlexLayoutModule,
    MatListModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
