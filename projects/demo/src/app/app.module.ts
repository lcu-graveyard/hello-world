import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FathymSharedModule, MaterialModule } from '@lcu-ide/common';
import {
  FlexLayoutComponent,
  HomeComponent,
  ReactiveFormComponent,
  TutorialsComponent,
  PageNotFoundComponent,
  NavigationComponent,
  SideNavComponent
} from '@fathym-it/hello-world-common';

@NgModule({
  declarations: [
    AppComponent,
    FlexLayoutComponent,
    HomeComponent,
    ReactiveFormComponent,
    TutorialsComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideNavComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    FathymSharedModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
