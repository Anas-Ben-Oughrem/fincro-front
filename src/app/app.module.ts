
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient ,HttpParams,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutes } from './app.routing';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FullComponent } from './layouts/full/full.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './demo-material-module';

import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './login/login.component';
import { MicroCreditComponent } from './Credit/micro-credit/micro-credit.component';
import { AddMicroCreditComponent } from './Credit/add-micro-credit/add-micro-credit.component';
import { MaterialFileInputModule  } from 'ngx-material-file-input';
import { MyCreditsComponent } from './Credit/my-credits/my-credits.component';
import { CreditComponent } from './Credit/credit/credit.component';
import { CreditDetailsComponent } from './Credit/credit-details/credit-details.component';
import { HomeComponent } from './homepage/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { TokenInterceptorService } from './homepage/services/token-interceptor.service';
import { CapacityToPayComponent } from './Credit/capacity-to-pay/capacity-to-pay.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    AppHeaderComponent,
    SpinnerComponent,
    AppSidebarComponent,
    AccountComponent,
    LoginComponent,
    MicroCreditComponent,
    AddMicroCreditComponent,
    MyCreditsComponent,
    CreditComponent,
    CreditDetailsComponent,
    HomeComponent,
    CapacityToPayComponent  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialFileInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
    FlexLayoutModule,
    HttpClientModule,
    SharedModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy,
      
    },
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
