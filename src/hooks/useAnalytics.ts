import { logEvent, logUserInteraction } from '@/lib/analytics';

export const useAnalytics = () => {
  const trackNavigation = (destination: string) => {
    logEvent('Navigation', 'Click', destination);
  };

  const trackThemeChange = (newTheme: string) => {
    logEvent('Theme', 'Change', newTheme);
  };

  const trackScroll = (percentage: number) => {
    logEvent('Scroll', 'Depth', `${percentage}%`);
  };

  const trackExternalLink = (url: string) => {
    logEvent('External Link', 'Click', url);
  };

  const trackFormSubmission = (formName: string, success: boolean) => {
    logEvent('Form', success ? 'Submit Success' : 'Submit Error', formName);
  };

  const trackButtonClick = (buttonName: string, section: string) => {
    logEvent('Button', 'Click', `${section} - ${buttonName}`);
  };

  const trackSearch = (query: string) => {
    logEvent('Search', 'Query', query);
  };

  const trackContentView = (contentType: string, contentId: string) => {
    logEvent('Content View', contentType, contentId);
  };

  const trackSocialShare = (platform: string, contentId: string) => {
    logEvent('Social Share', platform, contentId);
  };

  const trackError = (errorType: string, errorMessage: string) => {
    logEvent('Error', errorType, errorMessage);
  };

  return {
    trackNavigation,
    trackThemeChange,
    trackScroll,
    trackExternalLink,
    trackFormSubmission,
    trackButtonClick,
    trackSearch,
    trackContentView,
    trackSocialShare,
    trackError
  };
};