import { TestBed } from '@angular/core/testing';

// Core Domain
import { OrganisationFactory } from './organisation-factory.service';

describe('core/domain/OrganisationFactory', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    describe(':create', () => {
        it('should create an instance', () => {
            expect(new OrganisationFactory()).toBeTruthy();
        });
    });
});
