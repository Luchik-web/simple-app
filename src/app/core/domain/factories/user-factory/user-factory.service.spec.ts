import { TestBed } from '@angular/core/testing';

// Core Domain
import { UserFactory } from './user-factory.service';

describe('core/domain/UserFactory', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    describe(':create', () => {
        it('should create an instance', () => {
            expect(new UserFactory()).toBeTruthy();
        });
    });
});
