import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule} from 'ng2-charts';
import { NavComponent } from './UI/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashComponent } from './UI/dash/dash.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { CardComponent } from './UI/card/card.component';
import { MiniCardComponent } from './UI/mini-card/mini-card.component';
import { UseRadarComponent } from './charts/use-radar/use-radar.component';
import { UseLineComponent } from './charts/use-line/use-line.component';
import { HttpClientModule } from '@angular/common/http';
import { ListSelectComponent } from './UI/list-select/list-select.component';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {EventEmitterService} from './event-emitter.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsageCardComponent } from './UI/usage-card/usage-card.component';
import { ShowCarComponent } from './UI/show-car/show-car.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { TrafficRadarComponent } from './charts/traffic-radar/traffic-radar.component';
import { LightLineComponent } from './charts/light-line/light-line.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    MiniCardComponent,
    UseRadarComponent,
    UseLineComponent,
    ListSelectComponent,
    UsageCardComponent,
    ShowCarComponent,
    TrafficRadarComponent,
    LightLineComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    ChartsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
