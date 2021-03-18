import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccoutSettingsComponent } from './admin-settings/accout-settings.component';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UsersComponent } from './user/users/users.component';

import { AuthGuard } from '../services/service.index';
import { NewBoardDirectorComponent } from './admin-about-us/board-director/new-board-director/new-board-director.component';
import { NewLidershipComponent } from './admin-about-us/lidership/new-lidership/new-lidership.component';
import { ListLidershipComponent } from './admin-about-us/lidership/list-lidership/list-lidership.component';
import { ListBoardDirectorComponent } from './admin-about-us/board-director/list-board-director/list-board-director.component';
import { NewPartnerOrganizationComponent } from './admin-about-us/partner-organization/new-partner-organization/new-partner-organization.component';
import { ListPartnerOrganizationComponent } from './admin-about-us/partner-organization/list-partner-organization/list-partner-organization.component';



const adminRoutes: Routes = [

    {
        path: '',
        component: AdminComponent,
        canActivate: [ AuthGuard ],
        children : [

            // USERS
            { path: 'admin/user/profile/:id', component: UserProfileComponent, data : { tittle : 'User Profile' } },
            { path: 'admin/user/list', component: UsersComponent, data : { tittle : 'List Users' } },

            // ACCOUNT SETTINGS
            { path: 'admin/account-settings', component: AccoutSettingsComponent, data : { tittle : 'Account Settings' } },
            { path: 'admin/dashboard', component: DashboardComponent, data : { tittle : 'Dashboard' } },



            // ABOUT US
            // BOARD DIRECTOR
            { path: 'admin/new/board/director/:id', component: NewBoardDirectorComponent, data : { tittle : 'New Board Director' } },
            { path: 'admin/list/board/directors', component: ListBoardDirectorComponent, data : { tittle : 'List Board Director' } },
            // LIDERSHIP
            { path: 'admin/new/lidership/:id', component: NewLidershipComponent, data : { tittle : 'New Lidership' } },
            { path: 'admin/list/lidership', component: ListLidershipComponent, data : { tittle : 'List Lidership' } },
            // PARTNER ORGANIZATION
            { path: 'admin/new/partner/organization/:id', component: NewPartnerOrganizationComponent, data : { tittle : 'New Partner Organization' } },
            { path: 'admin/list/partner/organization', component: ListPartnerOrganizationComponent, data : { tittle : 'List Partner Organization' } },

            { path : '', redirectTo : 'admin/dashboard', pathMatch : 'full' },
        ]
    }

];

export const ADMIN_ROUTES  = RouterModule.forChild( adminRoutes );
