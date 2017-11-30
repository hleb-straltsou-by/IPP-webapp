import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

const routes: Routes = [
    { path: '', redirectTo: '/about', pathMatch: 'full' },
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
    { path: 'governing-body', component: GoverningBodyComponent },
    { path: 'herbology-lab', component: HerbologyLabComponent },
    { path: 'phytopathology-lab', component: PhytopathologyLabComponent },
    { path: 'entomology-lab', component: EntomologyLabComponent },
    { path: 'fodder-technical-lab', component: FodderTechnicalLabComponent },
    { path: 'vegetable-potato-lab', component: VegetablePotatoLabComponent },
    { path: 'microbiological-lab', component: MicrobiologicalLabComponent },
    { path: 'pesticides-lab', component: PesticidesLabComponent },
    { path: 'info-marketing-patent-lab', component: InfoMarketingPatentLabComponent },
    { path: 'fruit-crop-lab', component: FruitLabComponent },
];

@NgModule({
    // Initialize RouterModule with specified routes and start
    // listening changes in browser
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
