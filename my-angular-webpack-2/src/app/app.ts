
import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'my-app',
    template: `<h1>Hello from the {{componentName}}.</h1>`
});

export class AppComponent {
    componentName: 'AppComponent'
}

bootstrap(AppComponent);
