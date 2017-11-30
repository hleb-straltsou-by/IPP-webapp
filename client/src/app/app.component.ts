import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PanelMenuModule, MenuItem, FieldsetModule } from 'primeng/primeng';
import { TranslateService } from 'ng2-translate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

    items: MenuItem[];

    showRouterOutlet: Boolean = false;

    constructor(private translate: TranslateService, private activatedRoute: ActivatedRoute ) {
        translate.setDefaultLang('en');
        translate.use('en');
    }

    ngOnInit() {

        // if (this.activatedRoute.outlet === "/main"){
        //     this.showRouterOutlet = false;
        // } else {
        //     this.showRouterOutlet = true;
        // }

        this.items = [
            {
                label: 'Main',
                icon: 'fa-file-o',
            },
            {
                label: 'About the Institute',
                icon: 'fa-edit',
                routerLink: ['about'],
                routerLinkActiveOptions: {exact: true},
            },
            {
                label: 'Direction of researches',
                icon: 'fa-question',
                routerLink: ['researches'],
                routerLinkActiveOptions: {exact: true},
            },
            {
                label: 'Framework of organization',
                icon: 'fa-gear',
                routerLink: ['organization'],
                routerLinkActiveOptions: {exact: true},
            },
            {
                label: 'Young Scientists League',
                icon: 'fa-gear',
                routerLink: ['scientists'],
                routerLinkActiveOptions: {exact: true},
            },
            {
                label: 'Phytopathological society',
                icon: 'fa-gear',
                routerLink: ['society'],
                routerLinkActiveOptions: {exact: true},
            },
            {
                label: 'Publications',
                icon: 'fa-gear',
                routerLink: ['publications'],
                routerLinkActiveOptions: {exact: true},
            },
            {
                label: 'Conferences',
                icon: 'fa-gear',
                routerLink: ['conferences'],
                routerLinkActiveOptions: {exact: true},
            },
            {
                label: 'Site map',
                icon: 'fa-gear',
                routerLink: ['site'],
                routerLinkActiveOptions: { exact: true },
            },
            {
                label: 'Product reference book',
                icon: 'fa-gear',
                routerLink: ['products'],
                routerLinkActiveOptions: {exact: true},
            },
        ];
    }

    // setLanguage(lang: string) {
    //     this.translate.use(lang);
    // }

    // setEnLanguage() {
    //     this.translate.use("en");
    // }

    // setRuLanguage() {
    //     this.translate.use("ru");
    // }

    //    items: MenuItem[];
//
//    ngOnInit() {
//        this.items = [
//            {
//                label: 'Main', icon: 'fa-check',
//            },
//            {
//                label: 'About the Institute', icon: 'fa-soccer-ball-o', routerLink: ['about']
//            },
//            {
//                label: 'Direction of researches', icon: 'fa-child', routerLink: ['researches'],
//            },
//            {
//                label: 'Framework of organization', icon: 'fa-gears', routerLink: ['organization'],
//            },
//            {
//                label: 'Young Scientists League', icon: 'fa-gears', routerLink: ['scientists'],
//            },
//            {
//                label: 'Phytopathological society', icon: 'fa-gears', routerLink: ['society'],
//            },
//            {
//                label: 'Publications', icon: 'fa-gears', routerLink: ['publications'],
//            },
//            {
//                label: 'Conferences', icon: 'fa-gears', routerLink: ['conferences'],
//            },
//            {
//                label: 'Site map', icon: 'fa-gears', routerLink: ['site'],
//            },
//            {
//                label: 'Product reference book', icon: 'fa-gears', routerLink: ['products'],
//            },
//        ];
//    }
}
