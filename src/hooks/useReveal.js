'use client';

import {useEffect, useRef, useState} from 'react';

/**
 * Fires once when the element first crosses into the viewport, then
 * disconnects — a section should settle into place and never re-animate
 * on scroll-back, or it reads as jittery rather than fluid.
 */
export const useReveal = (options) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node || typeof IntersectionObserver === 'undefined') {
            setIsVisible(true);
            return;
        }

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        }, {threshold: 0.15, ...options});

        observer.observe(node);
        return () => observer.disconnect();
    }, [options]);

    return [ref, isVisible];
};
