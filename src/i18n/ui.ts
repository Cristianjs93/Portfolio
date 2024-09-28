import SpainFlag from '@/components/flags/SpainFlag.astro';
import EnglandFlag from '@/components/flags/EnglandFlag.astro';

export const languages: Record<
  string,
  { code: string; name: string; flag: typeof SpainFlag }
> = {
  en: {
    code: 'en',
    name: 'English',
    flag: EnglandFlag,
  },
  es: {
    code: 'es',
    name: 'Español',
    flag: SpainFlag,
  },
};

export const defaultLang = 'en';
export const showDefaultLang = false;
