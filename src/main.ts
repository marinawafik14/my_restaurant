import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    // Use importProvidersFrom to include HttpClientModule
    importProvidersFrom(HttpClientModule),
    provideRouter(routes)  // Register the routes in your app
  ]
});





