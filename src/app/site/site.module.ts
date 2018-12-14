import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { HomeComponent } from "./home.component";

import { ServiceComponent } from "./service.component";
import { RouterModule } from "@angular/router";
import { CounterDirective } from "./counter.directive";
import { AboutComponent } from "./about.component";
import { ProjectComponent } from "./project.component";
import { TeamComponent } from "./team.component";
import { ContactComponent } from "./contact.component";



@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [HomeComponent, CounterDirective, ServiceComponent, ProjectComponent, AboutComponent, TeamComponent, ContactComponent],
    exports: [HomeComponent]
})
export class SiteModule { }
