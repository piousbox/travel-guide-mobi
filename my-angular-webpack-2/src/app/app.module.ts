import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PagesAboutComponent } from './pages-about/pages-about.component';
// import { UsersFirsttimeComponent } from './users-firsttime/users-firsttime.component';

// import { ApiService } from './shared';
// import { routing } from './app.routing';

import { RouterModule, Routes } from '@angular/router'; 

const appRoutes: Routes = [
    { path: '', redirectTo: '/users/firsttime', pathMatch: 'full' },
    // { path: '/users/firsttime', component: UsersFirsttimeComponent },
    { path: '/pages/about', component: PagesAboutComponent }
];
/**
 * 20161227 routes
 */
/*
const appRoutes: Routes = [
    { path: '', redirectTo: '/users/firsttime', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    
    { path: 'users/firsttime', component: UsersFirsttimeComponent },
    { path: 'users/login', component: UsersLoginComponent },
    
    { path: 'cities/:city_name/from/:from/until/:until', component: CitiesShowComponent },
    
    { path: 'events/:id', component: EventsShowComponent },
    
    { path: 'profiles/edit', component: ProfilesEditComponent },
    
    { path: 'travel-plans', component: TravelPlansIndexComponent },
    { path: 'travel-plans/edit', component: TravelPlansEditComponent },
    
    { path: 'manager', component: ManagerDashboardComponent },
    { path: 'manager/events/:id/edit', component: ManagerEventsEditComponent }
];
 */

@NgModule({
    declarations: [
        AppComponent,
        // UsersFirsttimeComponent,
        PagesAboutComponent
    ],
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot( appRoutes )
    ],
    providers: [
        // ApiService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
