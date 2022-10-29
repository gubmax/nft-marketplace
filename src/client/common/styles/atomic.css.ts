import { style } from '@vanilla-extract/css'

import { dt } from './designTokens'

export const wFull = style({ width: '100%' })

// Flex

export const flex = style({ display: 'flex' })
export const flexRow = style({ flexDirection: 'row' })
export const flexCol = style({ flexDirection: 'column' })
export const flexWrap = style({ flexWrap: 'wrap' })
export const itemsCenter = style({ alignItems: 'center' })
export const selfStart = style({ alignSelf: 'flex-start' })
export const selfCenter = style({ alignSelf: 'center' })
export const selfEnd = style({ alignSelf: 'flex-end' })
export const justifyStart = style({ justifyContent: 'flex-start' })
export const justifyEnd = style({ justifyContent: 'flex-end' })
export const justifyCenter = style({ justifyContent: 'center' })
export const justifyAround = style({ justifyContent: 'space-around' })
export const justifyBetween = style({ justifyContent: 'space-between' })
export const justifySelfStart = style({ justifySelf: 'start' })
export const justifySelfCenter = style({ justifySelf: 'center' })
export const justifySelfEnd = style({ justifySelf: 'end' })
export const flexGrow = style({ flexGrow: 1 })
export const flexGrow0 = style({ flexGrow: 0 })
export const flexShrink = style({ flexShrink: 1 })
export const flexShrink0 = style({ flexShrink: 0 })

export const gap1 = style({ gap: dt.sys.space.s1 })
export const gap2 = style({ gap: dt.sys.space.s2 })
export const gap3 = style({ gap: dt.sys.space.s3 })
export const gap4 = style({ gap: dt.sys.space.s4 })
export const gap5 = style({ gap: dt.sys.space.s5 })

// Margin

export const m1 = style({ margin: dt.sys.space.s1 })
export const m2 = style({ margin: dt.sys.space.s2 })
export const m3 = style({ margin: dt.sys.space.s3 })
export const m4 = style({ margin: dt.sys.space.s4 })
export const m5 = style({ margin: dt.sys.space.s5 })
export const mAuto = style({ margin: 'auto' })

export const mt1 = style({ marginTop: dt.sys.space.s1 })
export const mt2 = style({ marginTop: dt.sys.space.s2 })
export const mt3 = style({ marginTop: dt.sys.space.s3 })
export const mt4 = style({ marginTop: dt.sys.space.s4 })
export const mt5 = style({ marginTop: dt.sys.space.s5 })
export const mtAuto = style({ marginTop: 'auto' })

export const mr1 = style({ marginRight: dt.sys.space.s1 })
export const mr2 = style({ marginRight: dt.sys.space.s2 })
export const mr3 = style({ marginRight: dt.sys.space.s3 })
export const mr4 = style({ marginRight: dt.sys.space.s4 })
export const mr5 = style({ marginRight: dt.sys.space.s5 })
export const mrAuto = style({ marginRight: 'auto' })

export const mb1 = style({ marginBottom: dt.sys.space.s1 })
export const mb2 = style({ marginBottom: dt.sys.space.s2 })
export const mb3 = style({ marginBottom: dt.sys.space.s3 })
export const mb4 = style({ marginBottom: dt.sys.space.s4 })
export const mb5 = style({ marginBottom: dt.sys.space.s5 })
export const mbAuto = style({ marginBottom: 'auto' })

export const ml1 = style({ marginLeft: dt.sys.space.s1 })
export const ml2 = style({ marginLeft: dt.sys.space.s2 })
export const ml3 = style({ marginLeft: dt.sys.space.s3 })
export const ml4 = style({ marginLeft: dt.sys.space.s4 })
export const ml5 = style({ marginLeft: dt.sys.space.s5 })
export const mlAuto = style({ marginLeft: 'auto' })

export const mx1 = style({ marginLeft: dt.sys.space.s1, marginRight: dt.sys.space.s1 })
export const mx2 = style({ marginLeft: dt.sys.space.s2, marginRight: dt.sys.space.s2 })
export const mx3 = style({ marginLeft: dt.sys.space.s3, marginRight: dt.sys.space.s3 })
export const mx4 = style({ marginLeft: dt.sys.space.s4, marginRight: dt.sys.space.s4 })
export const mx5 = style({ marginLeft: dt.sys.space.s5, marginRight: dt.sys.space.s5 })
export const mxAuto = style({ marginLeft: 'auto', marginRight: 'auto' })

export const my1 = style({ marginTop: dt.sys.space.s1, marginBottom: dt.sys.space.s1 })
export const my2 = style({ marginTop: dt.sys.space.s2, marginBottom: dt.sys.space.s2 })
export const my3 = style({ marginTop: dt.sys.space.s3, marginBottom: dt.sys.space.s3 })
export const my4 = style({ marginTop: dt.sys.space.s4, marginBottom: dt.sys.space.s4 })
export const my5 = style({ marginTop: dt.sys.space.s5, marginBottom: dt.sys.space.s5 })
export const myAuto = style({ marginTop: 'auto', marginBottom: 'auto' })
