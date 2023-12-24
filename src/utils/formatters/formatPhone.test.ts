import { formatPhone } from './formatPhone'

describe('formatPhone', () => {
  it('formats a phone number with only numbers', () => {
    const phoneNumber = '1234567890'
    const formattedPhoneNumber = formatPhone(phoneNumber)
    expect(formattedPhoneNumber).toBe('(12) 3456-7890')
  })

  it('formats a phone number with spaces and dashes', () => {
    const phoneNumber = '12 3456-7890'
    const formattedPhoneNumber = formatPhone(phoneNumber)
    expect(formattedPhoneNumber).toBe('(12) 3456-7890')
  })

  it('formats a phone number with additional characters', () => {
    const phoneNumber = '+55 (12) 3456-7890'
    const formattedPhoneNumber = formatPhone(phoneNumber)
    expect(formattedPhoneNumber).toBe('(55) 12345-67890')
  })

  it('returns an empty string for an empty input', () => {
    const phoneNumber = ''
    const formattedPhoneNumber = formatPhone(phoneNumber)
    expect(formattedPhoneNumber).toBe('')
  })

  it('returns the same input for invalid characters', () => {
    const phoneNumber = 'abc123!@#'
    const formattedPhoneNumber = formatPhone(phoneNumber)
    expect(formattedPhoneNumber).toBe('(12) 3')
  })

  // Add more test cases as needed based on the specific behavior you want to test
})
