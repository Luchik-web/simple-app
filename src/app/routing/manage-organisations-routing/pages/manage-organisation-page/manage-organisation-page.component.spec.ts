import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageOrganisationPageComponent } from './manage-organisation-page.component';

describe('ManageOrganisationPageComponent', () => {
    let component: ManageOrganisationPageComponent;
    let fixture: ComponentFixture<ManageOrganisationPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ManageOrganisationPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ManageOrganisationPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
