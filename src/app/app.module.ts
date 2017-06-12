/**
 * app.module
 */

import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TabsReponsiveModule } from './tabs/tabs.module';
@NgModule({
    imports: [
        BrowserModule,
        TabsReponsiveModule
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

