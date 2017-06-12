
# Angular Tabs-Responsive

## Important

**This package supports Angular 4**


## Updates



## Description
Simple Angular date time picker. Online demo is [here](https://danielykpan.github.io/date-time-picker/). 
This picker is responsive design, so feel free to try it in your desktops, tablets and mobile devices. 
This picker uses [MomentJS](http://momentjs.com/)

## Installation

To install this component, follow the procedure:

1. __Install with [npm](https://www.npmjs.com):`npm install @web-atrio/tabs-responsive --save`__
2. Add __DateTimePickerModule__ import to your __@NgModule__ like example below
    ```js
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { MyTestApp } from './my-test-app';

    import { TabsReponsiveModule } from '@web-atrio/tabs-responsive';

    @NgModule({
        imports:      [ BrowserModule, TabsReponsiveModule ],
        declarations: [ MyTestApp ],
        bootstrap:    [ MyTestApp ]
    })
    export class MyTestAppModule {}
    ```
3. Create a file "variable.scss" in the folder "app" and insert :
```scss
  $mediaMaxWithTabsResponsive: 680px;
```
## Usage

Use the following snippet inside your template. For example:

```html
            <app-tabs>
                <app-tab [tabTitle]="'Tabs 1'">
                    <div class="white"> Content 1</div>
                </app-tab>
                <app-tab [tabTitle]="'Tabs 2'"  [classLinkCss]="'colorRed'">
                    <div class="white"> Content 2</div>
                </app-tab>
                <app-tab [tabTitle]="'Tabs 3'"  [classLiCss]="'other'">
                    <div class="white"> Content 3</div>
                </app-tab>
            </app-tabs>
```
 * Required attributes:
      * **[tabTitle]=" 'My Title' "** --- You can set the title.

 * Optional attributes:
      * **[classLinkCss]=" 'cssClass' "** --- You can set classCSS for link.
      * **[classLiCss]=" 'cssClass' "** --- You can set classCSS for li.
      

## Demo
SOAP

## License
* License: MIT

## Author
* Author: Florin Sabri
# angular-2-4-Tabs-responsive
