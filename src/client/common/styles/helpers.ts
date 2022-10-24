import { FONT_SIZE_DEFAULT } from './constants'

export function pxToRem(val: number): string {
  return `${(val / FONT_SIZE_DEFAULT).toFixed(2)}rem`
}

export function join(...args: Array<string | number>): string {
  return args.join(' ')
}

export function negative(val: string | number): string {
  return `calc(-1 * ${val})`
}
