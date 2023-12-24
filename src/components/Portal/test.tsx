/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react'
import { render, screen } from '@testing-library/react'
import ReactPortal from '.'

jest.mock('./usePortal', () => {
  return {
    __esModule: true,
    usePortal: jest.fn(() => ({
      wrapperElement: null
    }))
  }
})

describe('ReactPortal', () => {
  test('does not render anything if wrapperElement is null', () => {
    render(
      <ReactPortal containerId="test-container">
        <div data-testid="portal-content">Portal Content</div>
      </ReactPortal>
    )
    const portalContent = screen.queryByTestId('react-portal-wrapper')
    expect(portalContent).not.toBeInTheDocument()
  })

  test('renders children inside portal', () => {
    const Element = document.createElement('div')
    const usePortalSpy = jest
      .spyOn(require('./usePortal'), 'usePortal')
      .mockReturnValue({ wrapperElement: Element })

    render(
      <ReactPortal>
        <div data-testid="content">Portal Content</div>
      </ReactPortal>
    )

    expect(usePortalSpy).toHaveBeenCalledWith('react-portal-wrapper')
  })
})
