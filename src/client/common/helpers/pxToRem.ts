import { FONT_SIZE_DEFAULT } from 'client/common/styles/constants'

export function pxToRem(val: number) {
  return `${(val / FONT_SIZE_DEFAULT).toFixed(2)}rem`
}
