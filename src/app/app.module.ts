import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
import { HeaderComponent } from './admin/shared/header/header.component';
import { BreadcrumsComponent } from './admin/shared/breadcrums/breadcrums.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { PagenotfoundComponent } from './admin/shared/pagenotfound/pagenotfound.component';
import { HomeComponent } from './site/home-page/home/home.component';

import { APP_ROUTES } from './app.routes';
import { AdminComponent } from './admin/admin.component';
import { FormsModule } from '@angular/forms';
import { ADMIN_ROUTES } from './admin/admin.routes';
import { AdminModule } from './admin/admin.module';
import { ServicesModule } from './services/services.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { FirstNavComponent } from './site/shared/first-nav/first-nav.component';
import { NavComponent } from './site/shared/nav/nav.component';
import { CarrouselComponent } from './site/home-page/carrousel/carrousel.component';
import { SiteLayoutComponent } from './site/shared/site-layout/site-layout.component';
import { FooterComponent } from './site/shared/footer/footer.component';
import { GwcDescriptionComponent } from './site/home-page/gwc-description/gwc-description.component';
import { ProductsServicesComponent } from './site/home-page/products-services/products-services.component';
import { ModalModule } from './site/shared/_modal';
import { LocationComponent } from './site/home-page/location/location.component';
import { NextEventsComponent } from './site/home-page/next-events/next-events.component';
import { BeesForTreesPageComponent } from './site/Bees-for-trees/bees-for-trees-page/bees-for-trees-page.component';
import { ThirdNavComponent } from './site/shared/third-nav/third-nav.component';
import { BtfCarousellComponent } from './site/Bees-for-trees/btf-carousell/btf-carousell.component';
import { PageWorkComponent } from './site/shared/page-work/page-work/page-work.component';
import { GuanacasteWatershedComponent } from './site/guanacaste-watershed/guanacaste-watershed/guanacaste-watershed.component';
import { CarrouselGuanacasteWatershedComponent } from './site/guanacaste-watershed/carrousel-guanacaste-watershed/carrousel-guanacaste-watershed.component';
import { TextWtdComponent } from './site/guanacaste-watershed/text-wtd/text-wtd.component';
import { LocationImgWtdComponent } from './site/guanacaste-watershed/location-img-wtd/location-img-wtd.component';
import { BftDescriptionComponent } from './site/Bees-for-trees/bft-description/bft-description.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,

    HomeComponent,
    AdminComponent,
    FirstNavComponent,
    NavComponent,
    CarrouselComponent,
    SiteLayoutComponent,
    FooterComponent,
    GwcDescriptionComponent,
    ProductsServicesComponent,
    LocationComponent,
    NextEventsComponent,
    BeesForTreesPageComponent,
    ThirdNavComponent,
    BtfCarousellComponent,
    PageWorkComponent,
    GuanacasteWatershedComponent,
    CarrouselGuanacasteWatershedComponent,
    TextWtdComponent,
    LocationImgWtdComponent,
    BftDescriptionComponent,
  ],
  imports: [

    AngularFileUploaderModule,
    [SwiperModule],
    HttpClientModule,
    AdminModule,
    FormsModule,
    BrowserModule,
    ServicesModule,
    APP_ROUTES, // rutas
    ModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
