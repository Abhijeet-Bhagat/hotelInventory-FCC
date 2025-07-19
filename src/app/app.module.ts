import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomHighlightDirective } from './custom-highlight.directive';
import { TextDirectiveDirective } from './text-directive.directive';
import { PipesComponent } from './pipes/pipes.component';
import { DatePipe } from '@angular/common';
import { ShortenPipe } from './shorten.pipe';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RequestInterceptor } from './request.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppNavComponent } from './app-nav/app-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { HoverDirective } from './directives/hover.directive';
import { EmailDirective } from './directives/EmailValidatorDirective/email.directive';
import {MatSnackBarModule} from '@angular/material/snack-bar';
// import { RoomsModule } from './rooms/rooms.module';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TwoWayBindingComponent,
    ParentCompComponent,
    ChildCompComponent,
    DirectivesComponent,
    CustomHighlightDirective,
    TextDirectiveDirective,
    PipesComponent,
    ShortenPipe,
    TemplateDrivenComponent,
    AppNavComponent,
    ErrorComponent,
    LoginComponent,
    HoverDirective,
    EmailDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // RoomsModule, //our module with its own routing should be above approutingmodule //for lazy loading it is removed
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatNativeDateModule,
    MatSnackBarModule
  ],
  providers: [
    // {
    //   provide: APP_SERVICE_CONFIG,
    //   useValue: APP_CONFIG
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true,
    },

    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
