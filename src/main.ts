import { enableProdMode, importProvidersFrom } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { environment } from "./environments/environment";
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from "@angular/common/http";
import {
  BrowserModule,
  HammerModule,
  bootstrapApplication,
} from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { provideAnimations } from "@angular/platform-browser/animations";
import { AppComponent } from "./app/app.component";
import { provideRouter, withComponentInputBinding } from "@angular/router";
import appRoutes from "./app/app.routes";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, FormsModule, HammerModule),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideRouter(appRoutes, withComponentInputBinding()),
  ],
}).catch((err) => console.log(err));
