import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { UpcomingtalksComponent } from './upcomingtalks/upcomingtalks.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [HomePageComponent, UpcomingtalksComponent, TeamComponent],
  imports: [
    SharedModule,
    HomeRoutingModule,
  ],
})
export class HomeModule { }
