import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralShellComponent } from './shell/general/general-shell.component';
import { LoginComponent } from './auth/login/login.component';
import { ApplicationFormComponent } from './proposals/application-form/application-form.component';
import { SlackNotificationComponent } from './annoucements/slack-notification/slack-notification.component';

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
  {
    path: 'slack-notification',
    component: SlackNotificationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
