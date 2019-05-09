import { NgModule }                  from '@angular/core';
import { CommonModule }              from'@angular/common';
import { ContactPageComponent }      from './contact-page.component';
import { ContactPageRouteModule }   from './contact-page-routing.module';

@NgModule({
    declarations: [
       ContactPageComponent 
    ],
    imports: [
        ContactPageRouteModule
    ]
})

export class ContactPageModule {

}

