import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '@lcu-ide/common';

import { TutorialsComponent } from './controls/tutorials/tutorials.component';
import { ReactiveFormComponent } from './controls/reactive-form/reactive-form.component';
import { FlexLayoutComponent } from './controls/flex-layout/flex-layout.component';
import { HomeComponent } from './controls/home/home.component';
import { PageNotFoundComponent } from './controls/page-not-found/page-not-found.component';
import { NavigationComponent } from './controls/navigation/navigation.component';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TutorialsComponent,
    ReactiveFormComponent,
    FlexLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideNavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    TutorialsComponent,
    ReactiveFormComponent,
    FlexLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideNavComponent],
  entryComponents: [
    TutorialsComponent,
    ReactiveFormComponent,
    FlexLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideNavComponent]
})
export class HelloWorldModule { }
