import { useBreakpoints } from '@vueuse/core';

const breakpoints = useBreakpoints({
  xs: 0,
  sm: 600,
  md: 1024,
  lg: 1440,
  xl: 1920,
});

const isMobile = breakpoints.smaller('sm');
const isTablet = breakpoints.between('sm', 'md');
const isDesktop = breakpoints.greaterOrEqual('md');

const isSmallDesktop = breakpoints.between('md', 'lg');
const isLargeDesktop = breakpoints.between('lg', 'xl');
const isExtraLargeDesktop = breakpoints.greaterOrEqual('xl');
const isTabletOrSmaller = breakpoints.smaller('md');
const isDesktopOrLarger = breakpoints.greaterOrEqual('md');
const isMobileOrTablet = breakpoints.smaller('md');
const isAnyScreen = breakpoints.between('xs', 'xl');

export {
  isMobile,
  isTablet,
  isDesktop,
  isSmallDesktop,
  isLargeDesktop,
  isExtraLargeDesktop,
  isTabletOrSmaller,
  isDesktopOrLarger,
  isMobileOrTablet,
  isAnyScreen,
};
