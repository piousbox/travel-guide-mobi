import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { UsersFirsttimeComponent } from './users-firsttime/users-firsttime.component';
import { UsersLoginComponent } from './users-login/users-login.component';
import { ProfilesEditComponent } from './profiles-edit/profiles-edit.component';
import { TravelPlansEditComponent } from './travel-plans-edit/travel-plans-edit.component';
import { CitiesShowComponent } from './cities-show/cities-show.component';
import { TravelPlansIndexComponent } from './travel-plans-index/travel-plans-index.component';
import { EventsShowComponent } from './events-show/events-show.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { ManagerEventsEditComponent } from './manager-events-edit/manager-events-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UsersFirsttimeComponent,
    UsersLoginComponent,
    ProfilesEditComponent,
    TravelPlansEditComponent,
    CitiesShowComponent,
    TravelPlansIndexComponent,
    EventsShowComponent,
    ManagerDashboardComponent,
    ManagerEventsEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
