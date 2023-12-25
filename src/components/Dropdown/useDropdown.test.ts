import { renderHook } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { useDropdown } from './useDropdown'

describe('useDropdown', () => {
  it('should toggle isOpen state', () => {
    const { result } = renderHook(() => useDropdown())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggleIsOpen()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggleIsOpen()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('should set body overflow to hidden when dropdown is open', () => {
    const { result } = renderHook(() => useDropdown())

    expect(document.body.style.overflow).toBe('unset')

    act(() => {
      result.current.toggleIsOpen()
    })

    expect(document.body.style.overflow).toBe('hidden')
  })

  it('should set body overflow to unset when unmounting', () => {
    const { result, unmount } = renderHook(() => useDropdown())

    act(() => {
      result.current.toggleIsOpen()
    })

    unmount()

    expect(document.body.style.overflow).toBe('unset')
  })
})
