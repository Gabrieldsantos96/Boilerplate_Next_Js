import { isEmailValid } from './isEmailValid'

describe('isEmailValid', () => {
  test('returns true for a valid email', () => {
    const validEmails = [
      'test@example.com',
      'user123@mail.co',
      'john.doe@domain.org'
    ]

    validEmails.forEach((email) => {
      expect(isEmailValid(email)).toBe(true)
    })
  })

  test('returns false for an invalid email', () => {
    const invalidEmails = [
      'invalid-email',
      'user@missing-tld',
      'user@.missing-domain',
      '@missing-username',
      'user@missing-tld.'
    ]

    invalidEmails.forEach((email) => {
      expect(isEmailValid(email)).toBe(false)
    })
  })

  test('is case insensitive', () => {
    const validEmail = 'test@example.com'
    const mixedCaseEmail = 'TeSt@ExAmPlE.CoM'

    expect(isEmailValid(validEmail)).toBe(true)
    expect(isEmailValid(mixedCaseEmail)).toBe(true)
  })
})
