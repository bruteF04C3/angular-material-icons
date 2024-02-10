import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { IconsComponent } from './pages/icons/icons.component';

export const routes: Routes = [
    {
        path: "",
        component: LandingComponent
    },
    {
        path: "icons",
        component: IconsComponent
    }
];
