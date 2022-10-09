import { media } from './media'
import * as comp from './components.css'
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
  sys: { ...system, media },
  /**
   * Component tokens.
   * The design attributes assigned to elements in a component.
   */
  comp,
} as const
