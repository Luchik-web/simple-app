import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-routing-static-routing-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    public title: string = 'Angular Test App';

    constructor() { }

    ngOnInit(): void {
    }

}
