import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralShellComponent } from './shell/general/general-shell.component';
import { LoginComponent } from './auth/login/login.component';

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
      {
        path: 'slack',
        loadChildren: './slack/slack.module#SlackModule',
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
