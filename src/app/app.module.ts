/**
 * Core application layout
 * @packageDocumentation
 * @module AppModule
 * @preferred
 * @author luchik
 */
/** */

// Angular dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// App Base
import { routes, routingConfiguration } from './routing';
import { AppComponent } from './app.component';

// Base Modules
import { CoreModule } from '@app-core/core.module';
import { LayoutsModule } from '@app-layouts/layouts/layouts.module';

@NgModule({
    imports: [
        // Angular dependencies
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        // App Modules
        CoreModule.forRoot(),
        RouterModule.forRoot(routes, routingConfiguration),
        LayoutsModule,
    ],
    exports: [
        LayoutsModule,
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
