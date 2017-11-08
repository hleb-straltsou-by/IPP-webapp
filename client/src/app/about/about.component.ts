import { Component } from '@angular/core';
import { PanelModule } from 'primeng/primeng';

@Component({
    selector: 'about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {
    header = "About the institute";
}