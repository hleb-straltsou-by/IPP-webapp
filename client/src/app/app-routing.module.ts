import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    { path: 'main', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'conferences', component: ConferencesComponent },
    { path: 'researches', component: ResearchesComponent },
    { path: 'organization', component: OrganizationComponent },
    { path: 'scientists', component: ScientistsComponent },
    { path: 'society', component: SocietyComponent },
    { path: 'publications', component: PublicationsComponent },
    { path: 'contacts', component: ContactsComponent },
    { path: 'site', component: SiteComponent },
    { path: 'products', component: ProductsComponent },
];

@NgModule({
    // Initialize RouterModule with specified routes and start
    // listening changes in browser
    imports: [ RouterModule.forRoot(routes) ],  
    exports: [ RouterModule ]
})

export class AppRoutingModule {}