import {  useEffect } from 'react';

export default function useBodyBackground(color) {
    useEffect(() => {
        document.body.classList.add(color);
    }, [color])
}