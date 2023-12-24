import { act, renderHook } from '@testing-library/react'
import { useToastContainer } from './useToastContainer'
import { toastEventManager } from '@/utils/helpers/showToast'
import React from 'react'

describe('useToastContainer', () => {
  it('should handle adding and removing messages', () => {
    const { result } = renderHook(() =>
      useToastContainer({ toastEventManager })
    )

    // Simulate adding a toast message
    const toastMessage = {
      duration: 5000
    }
    act(() => {
      toastEventManager.emit('addToast', toastMessage)
    })

    // Check if the message has been added
    expect(result.current.messages.length).toBe(1)
    expect(result.current.messages[0]).toMatchObject(toastMessage)

    // Simulate removing the message
    act(() => {
      result.current.handleRemoveMessage(result.current.messages[0].id)
    })

    // Check if the message has been removed
    expect(result.current.messages.length).toBe(0)
  })

  it('Should run useEffect cleanUp return function', () => {
    let isExecuted = false

    jest.spyOn(React, 'useEffect').mockImplementationOnce(() => {
      isExecuted = true
    })

    const { unmount } = renderHook(() =>
      useToastContainer({ toastEventManager })
    )

    unmount()

    expect(isExecuted).toBe(true)
  })
})
