'use client'

import { PropsWithChildren } from 'react'
import ToastContainer from '@/components/Toast/ToastContainer'
import { ThemeProvider } from 'styled-components'
import { QueryProvider } from '@/lib/queryProvider'
import GlobalStyles from '@/styles/global'
import { themeEventManager } from '@/utils/helpers/toggleTheme'
import { useTheme } from '@/hooks/useTheme'
import { DefaultTheme } from 'styled-components/dist/types'

export function Providers({ children }: PropsWithChildren) {
  const theme = useTheme({ themeEventManager })

  return (
    <>
      <ThemeProvider theme={theme.themeConfig as DefaultTheme}>
        <QueryProvider>
          <ToastContainer />
          <GlobalStyles />
          {children}
        </QueryProvider>
      </ThemeProvider>
    </>
  )
}
