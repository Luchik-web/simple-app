import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationComponent } from './organisation.component';

xdescribe('mudules/organisation-view/OrganisationComponent', () => {
    let component: OrganisationComponent;
    let fixture: ComponentFixture<OrganisationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [OrganisationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(OrganisationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
