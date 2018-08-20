import {Component} from "@angular/core";
import "./app.component.htm";

@Component({
    selector: 'angular-application',
    template: require('./app.component.htm')
})
export class AppComponent {
    versionNumber: string = "v.1.0.0";

}
