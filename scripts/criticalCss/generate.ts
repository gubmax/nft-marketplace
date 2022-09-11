import { generate } from 'critical'

/**
 * @link https://github.com/addyosmani/critical
 */
export const generateCriticalCss = (src: string): Promise<void> => {
  return generate({
    inline: true,
    base: 'dist/client/',
    src,
    target: src,
  })
}
