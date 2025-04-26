import { makeEnvironmentProviders } from '@angular/core';
import { providePrimeNGTheme } from '../../../lib/axe-os-theme/primeng-theme.config';

export function provideBitaxeUi() {
  return makeEnvironmentProviders([
    providePrimeNGTheme(),
  ]);
}