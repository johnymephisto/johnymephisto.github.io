import { useEffect } from 'react';
import { useTheme } from '../ThemeProvider';

const CustomCursor = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    // Add custom cursor styles to body
    document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="${
      isDarkMode ? '%23ffffff' : '%23000000'
    }" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/></svg>'), auto`;

    return () => {
      // Reset cursor on cleanup
      document.body.style.cursor = 'auto';
    };
  }, [isDarkMode]);

  return null;
};

export default CustomCursor;