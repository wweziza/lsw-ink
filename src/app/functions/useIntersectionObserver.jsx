import { useEffect, useState, useRef } from 'react';

export const useIntersectionObserver = ({
  root,
  rootMargin,
  threshold,
}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { root, rootMargin, threshold }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold]);

  return [targetRef, isIntersecting];
};