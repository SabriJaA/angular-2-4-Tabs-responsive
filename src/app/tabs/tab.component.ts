import {Component, Input, OnInit, ElementRef, Inject, ViewChild} from '@angular/core';
import {Tab} from './tab.interface';
import {TabsComponent} from './tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: 'tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent implements OnInit, Tab {
  @Input() tabTitle: string;
  @Input() classLinkCss: string;
  @Input() classLiCss: string;
  @Input() selected: boolean;

  constructor(private tabsComponent: TabsComponent) {
  }

  ngOnInit() {
    this.tabsComponent.addTab(this);
  }
  selectTab() {
    const tabs = this.tabsComponent.getAllTabs();
    tabs.map((tab) => {
      tab.selected = false;
    });
    this.selected = true;
  }
}
