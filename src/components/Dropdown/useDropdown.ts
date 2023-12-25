import { useEffect } from 'react'
import { useToggle } from '@/hooks/useToggle'

export function useDropdown() {
  const { toggle: toggleIsOpen, value: isOpen } = useToggle()
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  return {
    isOpen,
    toggleIsOpen
  }
}
