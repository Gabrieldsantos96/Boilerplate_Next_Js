import { useState } from 'react'

type ErrorProps = { field: string; message: string }

export default function useErrors() {
  const [errors, setErrors] = useState<ErrorProps[]>([])

  const noErrors = !errors.length

  function setError(errorsToAdd: ErrorProps[], fieldName: string) {
    setErrors((s) =>
      s.filter((err) => err.field !== fieldName).concat(errorsToAdd)
    )
  }

  function removeError(fieldName: string) {
    setErrors((prevState) =>
      prevState.filter((error) => error.field !== fieldName)
    )
  }

  function getErrorMessageByFieldName(fieldName: string) {
    return errors.find((error) => error.field === fieldName)?.message
  }

  return {
    setError,
    removeError,
    getErrorMessageByFieldName,
    errors,
    noErrors
  }
}
