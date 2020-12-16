const size = {
	mobile: "480px",
	minTeblet: "481px",
	maxTeblet: "768px",
	MinSmallScreen: "769px",
	MaxSmallScreen: "1024px",
	desktop: "1200px",
};

export const device = {
	mobile: `(max-width: ${size.mobile})`,
	tablet: `(min-width : ${size.minTeblet}) and (max-width: ${size.maxTeblet})`,
	small_screen: `((min-width: ${size.MinSmallScreen})and (max-width: ${size.MaxSmallScreen}))`,
	desktop: `(min-width : ${size.desktop} )`,
};
