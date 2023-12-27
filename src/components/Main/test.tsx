import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from '@/utils/helpers/testUtils'
import Main from '.'

jest.mock('@/utils/helpers/toggleTheme', () => ({
  __esModule: true,
  toggleTheme: jest.fn()
}))

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = render(<Main />)
    expect(container.firstChild).toHaveStyle({
      width: '100%',
      height: '100%',
      padding: '1rem'
    })
  })
})
