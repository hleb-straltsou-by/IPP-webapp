import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PanelMenuModule, MenuItem, FieldsetModule } from 'primeng/primeng';

@Component({
    selector: 'app-root',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent {

    items: MenuItem[];
    
    showRouterOutlet: Boolean = true;
    
    constructor(private activatedRoute: ActivatedRoute ) { }

    ngOnInit() {
        if (this.activatedRoute.outlet === "/main"){
            this.showRouterOutlet = false;
        }
        this.items = [
            {
                label: 'Main',
                icon: 'fa-file-o',
                command: (event) => {this.showRouterOutlet = false}
            },
            {
                label: 'About the Institute',
                icon: 'fa-edit',
                routerLink: ['about'],
                routerLinkActiveOptions: {exact:true},
                command: (event) => {this.showRouterOutlet = true}
            },
            {
                label: 'Direction of researches',
                icon: 'fa-question',
                routerLink: ['researches'],
                routerLinkActiveOptions: {exact:true},
                command: (event) => {this.showRouterOutlet = true}
            },
            {
                label: 'Framework of organization',
                icon: 'fa-gear',
                routerLink: ['organization'],
                routerLinkActiveOptions: {exact:true},
                command: (event) => {this.showRouterOutlet = true}
            },
            {
                label: 'Young Scientists League',
                icon: 'fa-gear',
                routerLink: ['scientists'],
                routerLinkActiveOptions: {exact:true},
                command: (event) => {this.showRouterOutlet = true}
            },
            {
                label: 'Phytopathological society',
                icon: 'fa-gear',
                routerLink: ['society'],
                routerLinkActiveOptions: {exact:true},
                command: (event) => {this.showRouterOutlet = true}
            },
            {
                label: 'Publications',
                icon: 'fa-gear',
                routerLink: ['publications'],
                routerLinkActiveOptions: {exact:true},
            },
            {
                label: 'Conferences',
                icon: 'fa-gear',
                routerLink: ['conferences'],
                routerLinkActiveOptions: {exact:true},
                command: (event) => {this.showRouterOutlet = true}
            },
            {
                label: 'Site map',
                icon: 'fa-gear',
                routerLink: ['site'],
                routerLinkActiveOptions: { exact:true },
                command: (event) => {this.showRouterOutlet = true}
            },
            {
                label: 'Product reference book',
                icon: 'fa-gear',
                routerLink: ['products'],
                routerLinkActiveOptions: {exact:true},
                command: (event) => {this.showRouterOutlet = true}
            },
        ];
    }
    
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