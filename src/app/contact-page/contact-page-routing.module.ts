import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';
import { ContactPageComponent }     from './contact-page.component';

const ContactPageRoute: Routes = [
    { path: 'contact', component: ContactPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(ContactPageRoute)
    ],
    exports: [
        RouterModule
    ]
})

export class ContactPageRouteModule {
    
}


