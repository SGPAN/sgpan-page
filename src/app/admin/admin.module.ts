import { ngModuleJitUrl } from "@angular/compiler";

import { NgModule } from '@angular/core';
import { ADMIN_ROUTES } from './admin.routes';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './shared/pagenotfound/pagenotfound.component';
import { AccoutSettingsComponent } from './admin-settings/accout-settings.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UsersComponent } from './user/users/users.component';
import { NewBoardDirectorComponent } from './admin-about-us/board-director/new-board-director/new-board-director.component';
import { ListBoardDirectorComponent } from './admin-about-us/board-director/list-board-director/list-board-director.component';
import { NewLidershipComponent } from './admin-about-us/lidership/new-lidership/new-lidership.component';
import { ListLidershipComponent } from './admin-about-us/lidership/list-lidership/list-lidership.component';
import { PipesModule } from '../pipes/pipes.module';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { NewPartnerOrganizationComponent } from './admin-about-us/partner-organization/new-partner-organization/new-partner-organization.component';
import { ListPartnerOrganizationComponent } from './admin-about-us/partner-organization/list-partner-organization/list-partner-organization.component';

@NgModule({

    declarations : [
        SidebarComponent,
        HeaderComponent,
        BreadcrumsComponent,
        DashboardComponent,
        PagenotfoundComponent,
        AccoutSettingsComponent,
        NewBoardDirectorComponent,
        ListBoardDirectorComponent,
        UserProfileComponent,
        UsersComponent,
        NewLidershipComponent,
        ListLidershipComponent,
        NewPartnerOrganizationComponent,
        ListPartnerOrganizationComponent
    ],
    exports : [
        SidebarComponent,
        HeaderComponent,
        BreadcrumsComponent,
        DashboardComponent,
        PagenotfoundComponent,
        NewBoardDirectorComponent,
        ListBoardDirectorComponent, 
    ],
    imports : [ 
        AngularFileUploaderModule,
        PipesModule,
        CommonModule,
        RouterModule,
        ADMIN_ROUTES,
        FormsModule,  
        ReactiveFormsModule
    ]
})
export class AdminModule { }