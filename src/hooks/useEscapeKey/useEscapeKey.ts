import { useEffect } from 'react'

type EscapeKeyProps = () => void

export function useEscapeKey(onClose: EscapeKeyProps | null) {
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === 'Escape' && onClose ? onClose() : null
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [onClose])
}
