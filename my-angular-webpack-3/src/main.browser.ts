import './polyfills.browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import 'jquery';

/**
 * let's do it mobile.s
 */
import '../vendor/jquery/jquery-3.1.1.js';

import '../vendor/framework7/css/framework7.ios.css';
import '../vendor/mobile.s/css/swipebox.css';
import '../vendor/mobile.s/css/animations.css';
import '../vendor/mobile.s/css/style.css';

import '../vendor/jquery/jquery.validate.min.js';
import '../vendor/jquery/jquery.swipebox.js';
import '../vendor/jquery/jquery.fitvids.js';
import '../vendor/framework7/js/framework7.js';

import '../vendor/mobile.s/js/email.js';
import '../vendor/mobile.s/js/audio.min.js';
import '../vendor/mobile.s/js/classie.js';
import '../vendor/mobile.s/js/selectFx.js';
// import '../vendor/mobile.s/js/my-app.js';

/**
 * before here, mobile.s
 */

export const platformRef = platformBrowserDynamic();

export function main() {
  return platformRef.bootstrapModule(AppModule)
    .catch(err => console.error(err));
}

// support async tag or hmr
switch (document.readyState) {
  case 'interactive':
  case 'complete':
    main();
    break;
  case 'loading':
  default:
    document.addEventListener('DOMContentLoaded', () => main());
}
