import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { SiteModule } from "./site/site.module";
import { FirstGuard } from './app-routing/first.guard';
import { HeaderComponent } from './model/header/header.component';
import { FooterComponent } from './model/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SiteModule
  ],
  providers: [FirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
