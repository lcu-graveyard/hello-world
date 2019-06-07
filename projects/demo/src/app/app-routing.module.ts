import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  HomeComponent,
  FlexLayoutComponent,
  ReactiveFormComponent,
  PageNotFoundComponent,
  TutorialsComponent } from '@fathym-it/hello-world-common';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'home/:Param', component: HomeComponent},
  { path: 'fxLayout', component: FlexLayoutComponent},
  { path: 'fxLayout:/Param', component: FlexLayoutComponent},
  { path: 'reactiveForm', component: ReactiveFormComponent},
  { path: 'reactiveForm:/Param', component: ReactiveFormComponent},
  { path: 'tutorials', component: TutorialsComponent},
  { path: '**', component: PageNotFoundComponent }
  // { path: 'map/:Params', component: AmblOnMapComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
