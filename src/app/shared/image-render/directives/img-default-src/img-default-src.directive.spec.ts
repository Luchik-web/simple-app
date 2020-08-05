import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { Component, DebugElement, Input } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ImageAttrDefaultDirective } from './img-default-src.directive';

@Component({
    template: `<img [src]="srcValue" [appSharedImagesImgDefaultSrc]="defaultValue" alt="test">`
}) class TestComponent {
    @Input() srcValue: string = '';
    @Input() defaultValue: string = '';
}

describe('ImageAttrDefaultDirective', () => {
    const srcValid: string = '/dev/images/test/test1.png';
    const srcDefault: string = '/dev/images/test/test2.png';
    const srcInvalid: string = '/dev/images/test/testnoexist.png';

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let debugElement: DebugElement;
    let directive: ImageAttrDefaultDirective;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TestComponent, ImageAttrDefaultDirective]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        component = fixture.componentInstance;

        debugElement = fixture.debugElement.query(By.directive(ImageAttrDefaultDirective));
        directive = debugElement.injector.get(ImageAttrDefaultDirective);
    });

    describe(':image exists', () => {

        beforeEach(() => {
            component.srcValue = srcValid;
            component.defaultValue = srcDefault;

            fixture.detectChanges();
        });

        it('should set src', () => {
            const element = fixture.debugElement.query(By.css('img'));
            const url: string = element.nativeElement.src;

            expect(url.indexOf(directive.src)).toEqual(url.length - directive.src.length);
            expect(url.indexOf(directive.appSharedImagesImgDefaultSrc)).not.toEqual(url.length - directive.appSharedImagesImgDefaultSrc.length);

            expect(directive.src).toBe(srcValid);
        });

        it('should set appSharedImagesImgDefaultSrc', () => {
            expect(directive.appSharedImagesImgDefaultSrc).toBe(srcDefault);
        });

        it('should use the src URL', (done) => {
            setTimeout(() => {
                expect(directive.src).toBe(srcValid);
                expect(directive.src).not.toEqual(srcDefault);
                done();
            }, 600);
        });
    });

    describe(':image doesn\'t exist', () => {
        beforeEach(() => {
            component.srcValue = srcInvalid;
            component.defaultValue = srcDefault;

            fixture.detectChanges();
        });

        it('should set src', () => {
            const element = fixture.debugElement.query(By.css('img'));
            const url: string = element.nativeElement.src;

            expect(url.indexOf(directive.src)).toEqual(url.length - directive.src.length);
            expect(url.indexOf(directive.appSharedImagesImgDefaultSrc)).not.toEqual(url.length - directive.appSharedImagesImgDefaultSrc.length);

            expect(directive.src).toBe(srcInvalid);
        });

        it('should set appSharedImagesImgDefaultSrc', () => {
            expect(directive.appSharedImagesImgDefaultSrc).toBe(srcDefault);
        });

        it('should use the src URL', (done) => {
            setTimeout(() => {
                expect(directive.src).toBe(srcDefault);
                expect(directive.src).not.toEqual(srcInvalid);
                done();
            }, 600);
        });
    });
});
