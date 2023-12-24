import React from 'react'
import { render } from '@/utils/helpers/testUtils'
import ModalTitle from '.'

test('should render modal title with content center', () => {
  const { getByText } = render(<ModalTitle title="Teste Modal" />)
  expect(getByText('Teste Modal')).toBeInTheDocument()
})
