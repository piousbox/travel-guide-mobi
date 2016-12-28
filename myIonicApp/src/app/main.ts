
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { OtherPage } from '../other/other';

platformBrowserDynamic().bootstrapModule(AppModule);

// @Page({
//   templateUrl: 'app/home/home.html',
// })
