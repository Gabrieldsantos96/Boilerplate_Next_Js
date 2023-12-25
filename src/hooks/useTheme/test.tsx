import { render, screen, act, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { themeEventManager, toggleTheme } from '@/utils/helpers/toggleTheme'
import { useTheme } from '.'

describe('useTheme', () => {
  it('should switch theme when user click', async () => {
    render(<Component />)

    expect(screen.getByText('Tema Atual: darkTheme')).toBeInTheDocument()

    act(() => {
      userEvent.click(screen.getByRole('button', { name: 'Toggle Theme' }))
    })

    await waitFor(() => {
      expect(screen.getByText('Tema Atual: lightTheme')).toBeInTheDocument()
    })

    act(() => {
      userEvent.click(screen.getByRole('button', { name: 'Toggle Theme' }))
    })

    await waitFor(() => {
      expect(screen.getByText('Tema Atual: darkTheme')).toBeInTheDocument()
    })
  })
})

function Component() {
  const { themeName } = useTheme({ themeEventManager })

  return (
    <div>
      <p>Tema Atual: {themeName}</p>
      <button onClick={() => toggleTheme()}>Toggle Theme</button>
    </div>
  )
}
