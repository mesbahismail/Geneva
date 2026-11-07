// Dimensions before the template's global 80% scale.
export const buttonSizes = {
	height: 56,
	minWidth: 192,
	icon: 24,
	fontSize: 18,
	paddingX: 24,
} as const;

export const buttonSizeStyles = {
	height: buttonSizes.height,
	boxSizing: 'border-box',
	fontSize: buttonSizes.fontSize,
	fontWeight: 600,
	lineHeight: 1.25,
	padding: `0 ${buttonSizes.paddingX}px`,
	whiteSpace: 'nowrap',
} as const;
