import { renderHook, act } from '@testing-library/react'
import { useEscapeKey } from './useEscapeKey'
import React from 'react'

describe('useModal', () => {
  it('should call when press escape', () => {
    const onCancelMock = jest.fn()
    renderHook(() => useEscapeKey(onCancelMock))

    act(() => {
      const escapeEvent = new KeyboardEvent('keydown', { key: 'Escape' })
      document.body.dispatchEvent(escapeEvent)
    })

    expect(onCancelMock).toHaveBeenCalled()
  })

  it('should not call for other keys', () => {
    const onCancelMock = jest.fn()

    renderHook(() => useEscapeKey(onCancelMock))

    act(() => {
      const otherKeyEvent = new KeyboardEvent('keydown', { key: 'Enter' })
      document.body.dispatchEvent(otherKeyEvent)
    })

    expect(onCancelMock).not.toHaveBeenCalled()
  })

  it('Should run useEffect cleanUp return function', () => {
    let isExecutedAfterUnmount = false

    jest.spyOn(React, 'useEffect').mockImplementationOnce(() => {
      isExecutedAfterUnmount = true
    })

    const { unmount } = renderHook(() => useEscapeKey(jest.fn()))

    unmount()

    expect(isExecutedAfterUnmount).toBe(true)
  })
})
