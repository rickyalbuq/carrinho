import { useEffect, useState } from 'react';
import intl from 'react-intl-universal';

import en from '../locales/en.json';
import pt from '../locales/pt.json';
import Common from '../locales/common';

interface LocalesType {
  [key: string]: Common;
}

const useTranslation = (): boolean => {
  const [language, setLanguage] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //setLanguage('en');
    setLanguage(navigator.language.split('-', 1)[0] || 'pt');

    const locales: LocalesType = {
      en: en,
      pt: pt,
    };

    (async () =>
      await intl
        .init({
          currentLocale: locales[language] ? language : 'pt',
          locales,
        })
        .then(() => setLoading(false)))();
  }, [language, setLanguage, setLoading]);

  return loading;
};

export default useTranslation;
