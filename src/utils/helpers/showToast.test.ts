import { showToast } from './showToast'
import { toastEventManager } from './showToast'

jest.mock('@/lib/eventManager')

describe('showToast', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('emits addToast event with correct data', () => {
    showToast({
      type: 'success',
      text: 'Test toast',
      duration: 3000
    })

    expect(toastEventManager.emit).toHaveBeenCalledWith('addToast', {
      type: 'success',
      text: 'Test toast',
      duration: 3000
    })
  })
})
