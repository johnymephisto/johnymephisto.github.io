import { useEffect, useState } from 'react';
import { useAnalytics } from './useAnalytics';

export const useScrollTracking = () => {
  const { trackScroll } = useAnalytics();
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = docHeight - winHeight;
      const scrollPercentage = Math.floor((scrollTop / trackLength) * 100);

      // Only track new maximum scroll depths at 25%, 50%, 75%, and 100%
      const checkpoints = [25, 50, 75, 100];
      checkpoints.forEach(checkpoint => {
        if (scrollPercentage >= checkpoint && maxScroll < checkpoint) {
          setMaxScroll(checkpoint);
          trackScroll(checkpoint);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [maxScroll, trackScroll]);
};