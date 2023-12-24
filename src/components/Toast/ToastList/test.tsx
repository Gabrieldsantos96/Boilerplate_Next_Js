import { render } from '@/utils/helpers/testUtils'

import theme from '@/styles/theme'
import { fireEvent, getByRole } from '@testing-library/react'
import ToastList from '.'

describe('<ToastList />', () => {
  it('should render toast list', () => {
    const { container } = render(
      <ToastList messages={[]} handleRemoveMessage={jest.fn()} />
    )

    expect(container.firstChild).toHaveStyle({
      position: 'fixed',
      left: '50%',
      'z-index': 2,
      bottom: theme.spacings.xlarge,
      transform: 'translateX(-50%)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render ToastMessage components', () => {
    const messages = [
      { id: 1, text: 'Message 1' },
      { id: 2, text: 'Message 2' }
    ]

    const { getByText } = render(
      <ToastList messages={messages} handleRemoveMessage={jest.fn()} />
    )

    messages.forEach((message) => {
      expect(getByText(message.text)).toBeInTheDocument()
    })
  })
})
