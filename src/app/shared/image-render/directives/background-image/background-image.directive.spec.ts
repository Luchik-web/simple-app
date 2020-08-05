/* tslint:disable:no-unused-variable */
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { BackgroundImageDirective } from './background-image.directive';

const testBackgroundUrl = "https://christianliebel.com/wp-content/uploads/2016/02/Angular2-825x510.png";

@Component({
    template: `<span sharedBackgroundImage="{{testBackgroundUrl}}">`
})
class TestSharedBackgroundImageComponent {
}

xdescribe('BackgroundImageDirective', () => {
    let component: TestSharedBackgroundImageComponent;
    let fixture: ComponentFixture<TestSharedBackgroundImageComponent>;
    let element: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestSharedBackgroundImageComponent, BackgroundImageDirective]
        });

        fixture = TestBed.createComponent(TestSharedBackgroundImageComponent);
        component = fixture.componentInstance;
        element = fixture.debugElement.query(By.css('span'));
    });

    it('should create an instance', () => {
        expect(element.nativeElement.style.backgroundImage).toBe('url(' + testBackgroundUrl + ')');
    });
});
