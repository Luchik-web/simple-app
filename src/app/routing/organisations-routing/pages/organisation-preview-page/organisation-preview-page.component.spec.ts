import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationPreviewPageComponent } from './organisation-preview-page.component';

describe('OrganisationPreviewPageComponent', () => {
    let component: OrganisationPreviewPageComponent;
    let fixture: ComponentFixture<OrganisationPreviewPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrganisationPreviewPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrganisationPreviewPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
