import React from 'react'
import { render } from '@/utils/helpers/testUtils'
import '@testing-library/jest-dom'
import ModalRoot from '.'

test('ModalRoot should render', () => {
  const { getByTestId } = render(
    <ModalRoot>
      <div data-testid="child-element">Child Element</div>
    </ModalRoot>
  )

  const modalContainer = document.getElementById('modal__container')
  expect(modalContainer).toBeInTheDocument()

  const childElement = getByTestId('child-element')
  expect(childElement).toBeInTheDocument()
})
