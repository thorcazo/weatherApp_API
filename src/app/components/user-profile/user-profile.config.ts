import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routesUser } from './user-profile.routes';

import { provideHttpClient } from '@angular/common/http';

export const userConfig: ApplicationConfig = {
  providers: [provideRouter(routesUser), provideHttpClient()],
};
