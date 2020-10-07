const sizes = {
  XXS: '1.3rem',
  XS: '1.5rem',
  S: '1.8rem',
  M: '2.3rem',
  L: '3.3rem',
  XL: '4.8rem',
  XXL: '5.3rem',
  XXXL: '6.1rem',
};

export const SCREEN = {
  MOBILE: '@media only screen and (max-width: 767px)',
  LANDSCAPE: '@media only screen and (min-width: 500px) and (max-height: 500px)',
  TABLET: '@media only screen and (min-width: 768px) and (max-width: 1111px)',
  MOBILE_AND_TABLET: '@media only screen and (max-width: 1111px)',
  TABLET_AND_DESKTOP: '@media only screen and (min-width: 768px)',
  DESKTOP: '@media only screen and (min-width: 1112px)',
  BIGGER_DESKTOP: '@media only screen and (min-width: 1700px)',
};

export default {
  color: {
    white: '#FFFFFF',
    black: '#000000',
  },
  font: sizes,
  spacing: sizes,
};
