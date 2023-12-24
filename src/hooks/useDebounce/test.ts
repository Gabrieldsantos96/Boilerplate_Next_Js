import { renderHook } from '@testing-library/react'
import { useDebounce } from '.'

jest.useFakeTimers()

describe('useDebounce', () => {
  test('returns the initial value', () => {
    const { result } = renderHook(() => useDebounce({ value: 'initialValue' }))
    expect(result.current.debouncedValue).toBe('initialValue')
  })

  test('clears the timer on unmount', () => {
    const { result, unmount } = renderHook(() =>
      useDebounce({ value: 'initialValue', delay: 300 })
    )

    unmount()

    expect(result.current.debouncedValue).toBe('initialValue')
  })
})
