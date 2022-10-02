import { style } from '@vanilla-extract/css'

import { dt } from './designTokens'

export const wFull = style({ width: '100%' })

// Flex

export const flex = style({ display: 'flex' })
export const flexRow = style({ flexDirection: 'row' })
export const flexCol = style({ flexDirection: 'column' })
export const itemsCenter = style({ alignItems: 'center' })

export const gap1 = style({ gap: dt.sys.space.s1 })
export const gap2 = style({ gap: dt.sys.space.s2 })
export const gap3 = style({ gap: dt.sys.space.s3 })
export const gap4 = style({ gap: dt.sys.space.s4 })

// Margin

export const m1 = style({ margin: dt.sys.space.s1 })
export const m2 = style({ margin: dt.sys.space.s2 })
export const m3 = style({ margin: dt.sys.space.s3 })
export const m4 = style({ margin: dt.sys.space.s4 })

export const mt1 = style({ marginTop: dt.sys.space.s1 })
export const mt2 = style({ marginTop: dt.sys.space.s2 })
export const mt3 = style({ marginTop: dt.sys.space.s3 })
export const mt4 = style({ marginTop: dt.sys.space.s4 })

export const mr1 = style({ marginRight: dt.sys.space.s1 })
export const mr2 = style({ marginRight: dt.sys.space.s2 })
export const mr3 = style({ marginRight: dt.sys.space.s3 })
export const mr4 = style({ marginRight: dt.sys.space.s4 })

export const mb1 = style({ marginBottom: dt.sys.space.s1 })
export const mb2 = style({ marginBottom: dt.sys.space.s2 })
export const mb3 = style({ marginBottom: dt.sys.space.s3 })
export const mb4 = style({ marginBottom: dt.sys.space.s4 })

export const ml1 = style({ marginLeft: dt.sys.space.s1 })
export const ml2 = style({ marginLeft: dt.sys.space.s2 })
export const ml3 = style({ marginLeft: dt.sys.space.s3 })
export const ml4 = style({ marginLeft: dt.sys.space.s4 })
