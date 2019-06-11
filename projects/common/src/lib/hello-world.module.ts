import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '@lcu-ide/common';

import { TutorialsComponent } from './controls/tutorials/tutorials.component';
import { ReactiveFormComponent } from './controls/reactive-form/reactive-form.component';
import { FlexLayoutComponent } from './controls/flex-layout/flex-layout.component';
import { HomeComponent } from './controls/home/home.component';
import { PageNotFoundComponent } from './controls/page-not-found/page-not-found.component';
import { NavigationComponent } from './controls/navigation/navigation.component';
import { SideNavComponent } from './controls/side-nav/side-nav.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './controls/user/user.component';
import { UsersListComponent } from './controls/users-list/users-list.component';
import { NavListComponent } from './controls/nav-list/nav-list.component';

@NgModule({
  declarations: [
    TutorialsComponent,
    ReactiveFormComponent,
    FlexLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideNavComponent,
    UserComponent,
    UsersListComponent,
    NavListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    TutorialsComponent,
    ReactiveFormComponent,
    FlexLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideNavComponent,
    UserComponent,
    UsersListComponent,
    NavListComponent,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents: [
    TutorialsComponent,
    ReactiveFormComponent,
    FlexLayoutComponent,
    HomeComponent,
    PageNotFoundComponent,
    NavigationComponent,
    SideNavComponent,
    UserComponent,
    UsersListComponent,
    NavListComponent]
})

export class HelloWorldModule {
}
