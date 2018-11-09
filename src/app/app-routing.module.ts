import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { CounterComponent } from './basics/counter/counter.component';
import { UserComponent } from './basics/user/user.component';


const routes: Routes = [
	{path: '', component: LandingPageComponent },
	{path: 'appcounter', component: CounterComponent },
	{path: 'user', component: UserComponent },
	
	
	  // otherwise redirect to home
	  { path: '**', redirectTo: '' }
];

@NgModule({
	imports : [ RouterModule.forRoot(routes) ],
	exports : [ RouterModule ]
})
export class AppRoutingModule { }
