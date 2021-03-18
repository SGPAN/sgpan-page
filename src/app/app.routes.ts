import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './admin/shared/pagenotfound/pagenotfound.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './site/home-page/home/home.component';
import { SiteLayoutComponent } from './site/shared/site-layout/site-layout.component';
import { BeesForTreesPageComponent } from './site/Bees-for-trees/bees-for-trees-page/bees-for-trees-page.component';
import { PageWorkComponent } from './site/shared/page-work/page-work/page-work.component';
import { GuanacasteWatershedComponent } from './site/guanacaste-watershed/guanacaste-watershed/guanacaste-watershed.component';


const appRoutes: Routes = [

    {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent, },
            { path: 'home', component: HomeComponent, },
            { path: 'Beesfortrees', component: BeesForTreesPageComponent},
            { path: 'GuanacasteWatershed', component: GuanacasteWatershedComponent},
            { path: 'pagework', component: PageWorkComponent},
            { path : '', redirectTo : 'home', pathMatch : 'full' },
            { path: '**', component: PagenotfoundComponent }

        ]
    }

];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash : true } );
