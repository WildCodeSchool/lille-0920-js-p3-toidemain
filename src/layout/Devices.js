const size = {
  mobile: '480px',
  minTablet: '481px',
  maxTablet: '768px',
  MinSmallScreen: '769px',
  MaxSmallScreen: '1024px',
  desktop: '1025px',
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(min-width : ${size.minTablet}) and (max-width: ${size.maxTablet})`,
  small_screen: `(min-width: ${size.MinSmallScreen})and (max-width: ${size.MaxSmallScreen})`,
  desktop: `(min-width : ${size.desktop} )`,
};
