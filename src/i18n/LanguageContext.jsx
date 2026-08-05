import React, {createContext, useContext, useEffect, useState} from 'react';
import {pt} from '../content/pt';
import {en} from '../content/en';

const dictionaries = {pt, en};

const LanguageContext = createContext(null);

const STORAGE_KEY = 'diego-portfolio-lang';

export const LanguageProvider = ({children}) => {
    const [lang, setLang] = useState(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        return stored === 'en' || stored === 'pt' ? stored : 'pt';
    });

    useEffect(() => {
        window.localStorage.setItem(STORAGE_KEY, lang);
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
    }, [lang]);

    const toggleLang = () => setLang((prev) => (prev === 'pt' ? 'en' : 'pt'));

    const value = {lang, toggleLang, t: dictionaries[lang]};

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return ctx;
};
