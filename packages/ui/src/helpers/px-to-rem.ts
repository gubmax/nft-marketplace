export function pxToRem(px: number): string {
	return `${(px / 16).toFixed(2)}rem`
}
