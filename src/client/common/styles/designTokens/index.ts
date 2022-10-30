import { media } from './media'
import { SCREEN_SIZES } from './screen'
import { glass } from './components/glass.css'
import { surface } from './components/surface.css'
import * as typography from './components/typography.css'
import { gradients, palette } from './reference.css'
import { system } from './system.css'

/**
 * Design tokens store style values, such as CSS custom properties (variables) and media queries,
 * allowing style values to be applied consistently.
 */
export const dt = {
  /**
   * Reference tokens.
   * Available tokens with associated values.
   */
  ref: { gradients, palette },
  /**
   * System tokens.
   * Decisions and roles that give the design system its character,
   * from color and font, to elevation and shape.
   */
  sys: { ...system, media, screen: SCREEN_SIZES },
  /**
   * Component tokens.
   * The design attributes assigned to elements in a component.
   */
  comp: { glass, surface, typography },
} as const
