import { providePrimeNG } from 'primeng/config';
import { BitaxeRedPreset } from './bitaxe-red-preset';


export function providePrimeNGTheme() {
  return providePrimeNG({
    theme: {
      preset: BitaxeRedPreset,
      options:{
        darkModeSelector: '.dark-mode'
      }
    },
  });
}