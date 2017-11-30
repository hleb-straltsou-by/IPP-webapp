import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TranslateModule } from 'ng2-translate';
import { TranslateLoader } from 'ng2-translate';
import { TranslateStaticLoader } from 'ng2-translate';

import { PanelMenuModule } from 'primeng/primeng';
import { FieldsetModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
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
import { GoverningBodyComponent } from './governing-body/governing-body.component';
import { HerbologyLabComponent } from './herbology-lab/herbology-lab.component';
import { PhytopathologyLabComponent } from './phytopathology-lab/phytopathology-lab.component';
import { EntomologyLabComponent } from './entomology-lab/entomology-lab.component';
import { FodderTechnicalLabComponent } from './fodder-technical-lab/fodder-technical-lab.component';
import { VegetablePotatoLabComponent } from './vegetable-potato-lab/vegetable-potato-lab.component';
import { MicrobiologicalLabComponent } from './microbiological-lab/microbiological-lab.component';
import { PesticidesLabComponent } from './pesticides-lab/pesticides-lab.component';
import { InfoMarketingPatentLabComponent } from './info-marketing-patent-lab/info-marketing-patent-lab.component';
import { FruitLabComponent } from './fruit-crop-lab/fruit-crop-lab.component';

export function createTranslateLoader(http: Http) {
    return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

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
    TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (createTranslateLoader),
            deps: [Http]
        }),
    DataListModule,
  ],
  declarations: [
    AppComponent,
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
    GoverningBodyComponent,
    HerbologyLabComponent,
    PhytopathologyLabComponent,
    EntomologyLabComponent,
    FodderTechnicalLabComponent,
    VegetablePotatoLabComponent,
    MicrobiologicalLabComponent,
    PesticidesLabComponent,
    InfoMarketingPatentLabComponent,
    FruitLabComponent,
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
