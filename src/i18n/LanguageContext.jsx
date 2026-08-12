'use client';

import React, {createContext, useContext, useEffect, useState} from 'react';
import {pt} from '../content/pt';
import {en} from '../content/en';

const dictionaries = {pt, en};

const LanguageContext = createContext(null);

const STORAGE_KEY = 'diego-portfolio-lang';

export const LanguageProvider = ({children}) => {
    // Server render (and first client paint, to match it) always starts in
    // 'pt' — window/localStorage don't exist on the server, so reading them
    // here would crash Next.js SSR. The stored preference is applied right
    // after mount instead, in the effect below.
    const [lang, setLang] = useState('pt');

    useEffect(() => {
        const stored = window.localStorage.getItem(STORAGE_KEY);
        if (stored === 'en' || stored === 'pt') {
            setLang(stored);
        }
    }, []);

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
