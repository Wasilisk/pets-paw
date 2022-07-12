import {useEffect, useState} from 'react'

export const useMediaQuery = (query: string): boolean => {
    const getMatches = (query: string): boolean => {
        if (typeof window !== 'undefined') {
            return window.matchMedia(query).matches;
        }
        return false;
    }

    const [matches, setMatches] = useState<boolean>(getMatches(query));

    function handleChange() {
        setMatches(getMatches(query));
    }

    useEffect(() => {
        const matchMedia = window.matchMedia(query);

        handleChange()

        if (matchMedia.addEventListener) {
            matchMedia.addEventListener('change', handleChange);
        }

        return () => {

            matchMedia.removeEventListener('change', handleChange);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])

    return matches;
}