import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstGuard } from './first.guard';
import { ServiceComponent } from '../site/service.component';
import { HomeComponent } from '../site/home.component';
import { AboutComponent } from '../site/about.component';
import { ProjectComponent } from '../site/project.component';
import { TeamComponent } from '../site/team.component';
import { ContactComponent } from '../site/contact.component';

const routes: Routes = [
  {
      path: "home", component: HomeComponent,
      canActivate: [FirstGuard]
  },
  {
      path: "service", component: ServiceComponent,
      canActivate: [FirstGuard]
  },
  {
      path: "about", component: AboutComponent,
      canActivate: [FirstGuard]
  },
  {
      path: "project", component: ProjectComponent,
      canActivate: [FirstGuard]
  },
  {
      path: "team", component: TeamComponent,
      canActivate: [FirstGuard]
  },
  {
      path: "contact", component: ContactComponent,
      canActivate: [FirstGuard]
  },
  { path: "**", redirectTo: "home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
