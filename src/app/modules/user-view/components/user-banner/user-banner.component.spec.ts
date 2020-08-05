import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBannerComponent } from './user-banner.component';

xdescribe('mudules/user-manage/UserBannerComponent', () => {
    let component: UserBannerComponent;
    let fixture: ComponentFixture<UserBannerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserBannerComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserBannerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
