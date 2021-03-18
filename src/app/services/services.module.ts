import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedService } from './shared/shared.service';
import { SidebarService } from './shared/sidebar.service';
import { AuthService } from './auth/auth.service';
import { BoardDirectorService } from './board-director/board-director.service';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { AccoutSettingsComponent } from '../admin/admin-settings/accout-settings.component';

@NgModule({
    declarations: [],
    imports: [ 
        CommonModule,
        HttpClientModule
     ],
    exports: [
        // HttpClientModule
    ],
    providers: [
        AccoutSettingsComponent,
        SharedService,
        SidebarService,
        AuthService,
        BoardDirectorService,
        AuthGuard,

        // HttpClientModule

    ],
})
export class ServicesModule {}