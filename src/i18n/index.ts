import english from './en.json';
import spanish from './es.json';

interface I18N {
  [key: string]: { [key: string]: string };
}

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es',
};

export const getI18N = ({
  currentLocale = 'en',
}: {
  currentLocale: string | undefined;
}): I18N => {
  if (currentLocale === LANGUAGES.ENGLISH) return english;
  if (currentLocale === LANGUAGES.SPANISH) return spanish;
  return spanish;
};
