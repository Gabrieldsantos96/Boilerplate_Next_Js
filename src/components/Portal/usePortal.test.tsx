import { renderHook } from '@testing-library/react'
import { usePortal } from './usePortal'
import * as helpers from '@/utils/helpers/createElementAndAppendToBody'

jest.mock('@/utils/helpers/createElementAndAppendToBody')

describe('usePortal', () => {
  it('should create and return a wrapper element when it does not exist', () => {
    const { result } = renderHook(() => usePortal())

    expect(
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      require('@/utils/helpers/createElementAndAppendToBody')
        .createElementAndAppendToBody
    ).toHaveBeenCalledWith('react-portal-wrapper')

    const wrapperElement = helpers.createElementAndAppendToBody(
      'react-portal-wrapper'
    )

    jest
      .spyOn(helpers, 'createElementAndAppendToBody')
      .mockReturnValueOnce(wrapperElement)

    expect(result.current.wrapperElement).not.toBeNull()
  })

  it('should return an existing wrapper element when it already exists', () => {
    document.body.innerHTML = '<div id="react-portal-wrapper-existing"></div>'

    const { result } = renderHook(() =>
      usePortal('react-portal-wrapper-existing')
    )

    expect(result.current.wrapperElement).not.toBeNull()

    expect(result.current.wrapperElement?.id).toBe(
      'react-portal-wrapper-existing'
    )
  })
})
