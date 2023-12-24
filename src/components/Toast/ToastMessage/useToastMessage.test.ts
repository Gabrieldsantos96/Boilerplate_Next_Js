import { act, renderHook } from '@testing-library/react'
import { useToastMessage } from './useToastMessage'

describe('useToastMessage', () => {
  it('should call onRemoveMessage after the specified duration', async () => {
    jest.useFakeTimers()

    const onRemoveMessage = jest.fn()
    const message = { id: 1, duration: 5000 }

    const { unmount } = renderHook(() =>
      useToastMessage({
        onRemoveMessage,
        message
      })
    )

    expect(onRemoveMessage).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(5000)
    })

    expect(onRemoveMessage).toHaveBeenCalledWith(1)

    unmount()
    jest.clearAllTimers()
  })

  it('should call onRemoveMessage after 7s if duration is not specified', () => {
    const onRemoveMessage = jest.fn()
    const message = { id: 1 }

    renderHook(() =>
      useToastMessage({
        onRemoveMessage,
        message
      })
    )

    expect(onRemoveMessage).not.toHaveBeenCalled()

    act(() => {
      jest.advanceTimersByTime(7000)
    })

    expect(onRemoveMessage).toHaveBeenCalledWith(1)
  })
})
