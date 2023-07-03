import esAR from './locales/es-AR';
import enEN from './locales/en-EN';
import {Enumi18n} from './Interfacei18n';

export const getText = (i18n: Enumi18n) => (i18n === Enumi18n.EN ? enEN : esAR);
