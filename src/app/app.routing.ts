import {ModuleWithProviders }from '@angular/core';
import{Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const appRoute: Routes=[
    {
        path:'',
        component:HomeComponent
    },

    {
        path:'about',
        component:AboutComponent
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoute);
