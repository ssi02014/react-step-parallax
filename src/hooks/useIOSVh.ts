import { useEffect } from 'react';

const useIOSVh = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);
};

export default useIOSVh;
