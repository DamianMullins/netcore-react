import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import es from 'react-intl/locale-data/es';

addLocaleData([...en, ...es]);

export * from 'react-intl';
export { default as messages } from './messages';
export { default as numberFormats } from './numberFormats';
