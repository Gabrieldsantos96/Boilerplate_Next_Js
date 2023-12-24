import React from 'react'
import { render } from '@/utils/helpers/testUtils'
import Modal from '.'
import { useModal } from './useModal'

jest.mock('./useModal')

describe('Modal', () => {
  it('renders correctly when isVisible is true', () => {
    const mockUseModal = useModal as jest.MockedFunction<typeof useModal>
    mockUseModal.mockReturnValue({
      isVisible: true,
      toggle: jest.fn()
    })

    const { getByText } = render(
      <Modal
        title="Test Modal"
        onConfirm={jest.fn()}
        cancelLabel="Cancel"
        confirmLabel="Confirm"
      >
        <div>content</div>
      </Modal>
    )
    expect(getByText('Test Modal')).toBeInTheDocument()
  })

  it('does not render when isVisible is false', () => {
    const mockUseModal = useModal as jest.MockedFunction<typeof useModal>
    mockUseModal.mockReturnValue({
      isVisible: false,
      toggle: jest.fn()
    })

    const { queryByText } = render(
      <Modal
        title="Test Modal"
        onConfirm={jest.fn()}
        cancelLabel="Cancel"
        confirmLabel="Confirm"
      >
        <div>content</div>
      </Modal>
    )

    expect(queryByText('Test Modal')).not.toBeInTheDocument()
  })
})
