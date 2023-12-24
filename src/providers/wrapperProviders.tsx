'use client'

import { PropsWithChildren } from 'react'
import ToastContainer from '@/components/Toast/ToastContainer'
import { ThemeProvider } from 'styled-components'
import { QueryProvider } from '@/lib/queryProvider'
import GlobalStyles from '@/styles/global'
import theme from '@/styles/theme'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <QueryProvider>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalStyles />
          {children}
        </ThemeProvider>
      </QueryProvider>
    </>
  )
}
