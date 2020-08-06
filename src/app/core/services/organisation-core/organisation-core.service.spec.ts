import { TestBed } from '@angular/core/testing';

import { OrganisationCoreService } from './organisation-core.service';

xdescribe('OrganisationCoreService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: OrganisationCoreService = TestBed.get(OrganisationCoreService);
        expect(service).toBeTruthy();
    });
});
