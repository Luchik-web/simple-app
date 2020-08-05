import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { RequestAdapterService } from './request-adapter.service';

xdescribe('RequestAdapterService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            providers: [
                RequestAdapterService
            ]
        })
    });

    it('should be created', () => {
        const service: RequestAdapterService = TestBed.get(RequestAdapterService);
        expect(service).toBeTruthy();
    });
});
