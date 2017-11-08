import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { PanelMenuModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { MainComponent } from './main/main.component';
import { AboutComponent } from './about/about.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { ResearchesComponent } from './researches/researches.component';
import { OrganizationComponent } from './organization/organization.component';
import { ScientistsComponent } from './scientists/scientists.component';
import { SocietyComponent } from './society/society.component';
import { PublicationsComponent } from './publications/publications.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SiteComponent } from './site/site.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule,
    FieldsetModule,
    PanelModule,
    RouterModule,
  ],
  declarations: [
    MainComponent,
    AboutComponent,
    ConferencesComponent,
    ResearchesComponent,
    OrganizationComponent,
    ScientistsComponent,
    SocietyComponent,
    PublicationsComponent,
    ContactsComponent,
    SiteComponent,
    ProductsComponent,
  ],
  bootstrap: [ MainComponent ]
})

export class AppModule {}
