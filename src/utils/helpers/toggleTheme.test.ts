import { toggleTheme } from './toggleTheme'
import { themeEventManager } from './toggleTheme'

jest.mock('@/lib/eventManager')

describe('toggleTheme', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('emits toggleTheme event with correct data', () => {
    toggleTheme()

    expect(themeEventManager.emit).toHaveBeenCalledWith('toggleTheme', '')
  })
})
