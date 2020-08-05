import { TestBed } from '@angular/core/testing';

import { FactoryAbstract } from './factory-abstract.service';

xdescribe('FactoryAbstract', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: FactoryAbstract = TestBed.get(FactoryAbstract);
        expect(service).toBeTruthy();
    });
});
