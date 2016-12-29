import { Component } from '@angular/core';
import { CollapseDirective } from 'ng2-bootstrap';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})

export class AppComponent {
    public isCollapsed:boolean = false;

    public collapsed(event:any):void {
        console.log(event);
    }

    public expanded(event:any):void {
        console.log(event);
    }
}

