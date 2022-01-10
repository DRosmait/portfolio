export const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  mobileLandscapeS: "320px",
  mobileLandscapeM: "375px",
  mobileLandscapeL: "425px",
  tablet: "768px",
  desktopS: "1024px",
  desktopM: "1440px",
  desktopL: "1920px",
  desktopXL: "2560px",
};

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  mobileLandscapeS: `(min-height: ${size.mobileLandscapeS})`,
  mobileLandscapeM: `(min-height: ${size.mobileLandscapeM})`,
  mobileLandscapeL: `(min-height: ${size.mobileLandscapeL})`,
  tablet: `(min-width: ${size.tablet})`,
  desktopS: `(min-width: ${size.desktopS})`,
  desktopM: `(min-width: ${size.desktopM})`,
  desktopL: `(min-width: ${size.desktopL})`,
  desktopXL: `(min-width: ${size.desktopXL})`,
};
