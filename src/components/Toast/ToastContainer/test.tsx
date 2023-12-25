import { render } from '@/utils/helpers/testUtils'

import ToastContainer from '.'
import theme from '@/styles/lightTheme'

describe('<ToastContainer />', () => {
  it('should render toast container', () => {
    const { container } = render(<ToastContainer />)

    expect(container.firstChild).toHaveStyle({
      position: 'fixed',
      left: '50%',
      'z-index': 2,
      bottom: theme.spacings.xlarge,
      transform: 'translateX(-50%)'
    })

    expect(container.firstChild).toMatchSnapshot()
  })
})
