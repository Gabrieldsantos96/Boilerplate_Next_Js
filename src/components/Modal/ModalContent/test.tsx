import { render } from '@/utils/helpers/testUtils'
import ModalContent from '.'

describe('<ModalContent />', () => {
  it('should render the content', () => {
    const { container } = render(<ModalContent>Test Content</ModalContent>)
    expect(container.textContent).toContain('Test Content')
    expect(container.firstChild).toMatchSnapshot()
  })
})
