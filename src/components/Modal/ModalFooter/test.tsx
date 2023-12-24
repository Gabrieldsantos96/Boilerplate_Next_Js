import React from 'react'
import { fireEvent } from '@testing-library/react'
import { screen } from '@testing-library/react'
import { render } from '@/utils/helpers/testUtils'
import ModalFooter from '.'

test('ModalFooter should render', () => {
  const onCloseMock = jest.fn()
  const onConfirmMock = jest.fn()

  const { getByText } = render(
    <ModalFooter
      onClose={onCloseMock}
      onConfirm={onConfirmMock}
      cancelLabel="Cancel"
      confirmLabel="Confirm"
    />
  )

  // Verifica se os botões estão presentes
  const cancelButton = getByText('Cancel')
  const confirmButton = getByText('Confirm')
  expect(cancelButton).toBeInTheDocument()
  expect(confirmButton).toBeInTheDocument()

  fireEvent.click(cancelButton)
  fireEvent.click(confirmButton)

  expect(onCloseMock).toHaveBeenCalled()
  expect(onConfirmMock).toHaveBeenCalled()
})

test('ModalFooter should not render if func is null', () => {
  const { queryByText } = render(
    <ModalFooter cancelLabel="Cancel" confirmLabel="Confirm" />
  )

  const cancelButton = queryByText('Cancel')
  const confirmButton = queryByText('Confirm')
  expect(cancelButton).toBeNull()
  expect(confirmButton).toBeNull()
})

it('should disable button if isLoading is true', () => {
  render(
    <ModalFooter
      onClose={jest.fn()}
      isLoading
      cancelLabel="Cancel"
      confirmLabel="Confirm"
    />
  )

  expect(screen.getByTestId('styled-button')).toHaveAttribute(
    'aria-disabled',
    'true'
  )
})
