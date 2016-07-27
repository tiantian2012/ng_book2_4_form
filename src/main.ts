import { bootstrap }    from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {  provideForms } from '@angular/forms';
import { AppComponent } from './app/app.component';
import "../public/resources/vendor/semantic.min.css";
import "../public/resources/css/style.css";

// import { HTTP_PROVIDERS,XHRBackend } from '@angular/http';
if (process.env.ENV === 'production') {
  enableProdMode();
}
// bootstrap(AppComponent, [
//   APP_ROUTER_PROVIDERS,
//   HTTP_PROVIDERS,
//   {provide:XHRBackend,useClass:InMemoryBackendService},
//   {provide:SEED_DATA,useClass:InMemoryDataService}
// ]);
bootstrap(AppComponent,[provideForms()]).catch((err:any)=>console.error(err));
