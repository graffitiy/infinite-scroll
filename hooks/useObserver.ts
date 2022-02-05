import { useEffect, useState } from 'react';
export const useObserver = (target) => {
  const defaultOptions = {
    rootMargin: '600px',
    threshold: 0.5,
  };
  const [isIntersecting, setIntersecting] = useState(false);
  const observer = new IntersectionObserver((entries) => {
    setIntersecting(entries[0].isIntersecting);
  }, defaultOptions);

  useEffect(() => {
    if (target?.current) {
      observer.observe(target.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [observer, target]);

  return isIntersecting;
};