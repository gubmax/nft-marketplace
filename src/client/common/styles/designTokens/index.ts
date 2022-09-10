import { system } from './system.css'
import { palette } from './palette.css'
import { surface } from './components.css'

/**
 * Design tokens store style values, such as CSS custom properties (variables) and media queries,
 * allowing style values to be applied consistently.
 */
 export const dt = {
  /**
   * Reference tokens.
   * Available tokens with associated values.
   */
  ref: { palette },
  /**
   * System tokens.
   * Decisions and roles that give the design system its character,
   * from color and font, to elevation and shape.
   */
  sys: system,
  /**
   * Component tokens.
   * The design attributes assigned to elements in a component.
   */
  comp: { surface }
} as const
