import { makeEnvironmentProviders } from '@angular/core';
import { providePrimeNGTheme } from './primeng-theme.config';

export function provideAxeOSTheme() {
  return makeEnvironmentProviders([
    providePrimeNGTheme(),
  ]);
}