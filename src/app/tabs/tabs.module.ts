/**
 * tabs.reponsive.module
 */

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
    declarations: [
        // Components / Directives/ Pipes
        TabsComponent,
        TabComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        TabsComponent,
        TabComponent
    ],
    providers: [],
    entryComponents: [TabsComponent]
})
export class TabsReponsiveModule {}