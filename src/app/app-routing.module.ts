import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralShellComponent } from './shell/general/general-shell.component';
import { LoginComponent } from './auth/login/login.component';
import { ApplicationFormComponent } from './proposals/application-form/application-form.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralShellComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'landing-page',
        loadChildren: './home/home.module#HomeModule',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'application-form',
    component: ApplicationFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
