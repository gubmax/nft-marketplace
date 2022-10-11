import { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import { useEvent } from './useEvent'

export function useLink<T extends Element>(to = ''): (event?: SyntheticEvent<T>) => void {
  const navigate = useNavigate()

  return useEvent((event) => {
    event?.preventDefault()
    navigate(to)
  })
}
