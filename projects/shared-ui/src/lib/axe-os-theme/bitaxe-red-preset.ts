import { definePreset, palette } from '@primeng/themes';
import Nora from '@primeng/themes/nora';

const bitaxeRed = palette('#f80421');

export const BitaxeRedPreset = definePreset(Nora, {
    semantic: {
        primary: bitaxeRed,
        colorScheme: {
            light: {
                primary: {
                    color: bitaxeRed['500'],
                    inverseColor: '#ffffff',
                    hoverColor: bitaxeRed['500'],
                    activeColor: bitaxeRed['500'],
                },
                highlight: {
                    background: '{zinc.950}',
                    focusBackground: '{zinc.700}',
                    color: '#ffffff',
                    focusColor: '#ffffff'
                },
                formField: {
                    background: 'transparent',
                    borderColor: '#192730'
                },
                surface: {
                    0: '#070D17',
                    50: '#2e3744',
                    100: '#454d59',
                    200: '#5d646d',
                    300: '#747a82',
                    400: '#8b9097',
                    500: '#a2a6ac',
                    600: '#b9bcc1',
                    700: '#d1d3d5',
                    800: '#e8e9ea',
                    900: '#ffffff',
                    950: '#ffffff',
                }
            },
            dark: {
                primary: {
                    color: bitaxeRed['500'],
                    background: 'green',
                    inverseColor: '#ffffff',
                    hoverColor: 'rgba(255, 255, 255, 0.03);',
                    activeColor: bitaxeRed['500']
                },
                highlight: {
                    background: 'rgba(250, 250, 250, .16)',
                    focusBackground: 'rgba(250, 250, 250, .24)',
                    color: bitaxeRed['500'],
                    focusColor: 'rgba(255,255,255,.87)'
                },
                surface: {
                    0: '#070D17',
                    50: '#2e3744',
                    100: '#454d59',
                    200: '#5d646d',
                    300: '#747a82',
                    400: '#8b9097',
                    500: '#a2a6ac',
                    600: '#b9bcc1',
                    700: '#d1d3d5',
                    800: '#e8e9ea',
                    900: '#ffffff',
                    950: '#ffffff',
                }
            }
        }
    }
});