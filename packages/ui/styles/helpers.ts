export function pxToRem(val: number): string {
	return `${(val / 16).toFixed(2)}rem`
}
