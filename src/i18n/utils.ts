import { defaultLang, showDefaultLang } from './ui';

export function useTranslatedPath(lang: string) {
  return function translatePath(path: string, loc: string = lang) {
    if (path.includes('mailto:')) return path;
    return !showDefaultLang && loc === defaultLang ? path : `/${loc}${path}`;
  };
}
