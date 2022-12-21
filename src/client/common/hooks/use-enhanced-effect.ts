import { useEffect, useLayoutEffect } from 'react'

import { isBrowser } from '../helpers/environment.js'

export const useEnhancedEffect = isBrowser ? useLayoutEffect : useEffect
