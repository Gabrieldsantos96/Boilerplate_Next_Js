'use client'

import { useCallback, useState, useEffect, useMemo } from 'react'
import lightTheme from '@/styles/lightTheme'
import darkTheme from '@/styles/darkTheme'
import { IEventManager } from '@/lib/eventManager'

export type useThemeProps = { themeEventManager: IEventManager<string> }

export function useTheme({ themeEventManager }: useThemeProps) {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = useCallback(
    () => setTheme((s) => (s === 'dark' ? 'light' : 'dark')),
    []
  )
  const themeConfig = useMemo(
    () => (theme === 'dark' ? darkTheme : lightTheme),
    [theme]
  )

  useEffect(() => {
    themeEventManager.on('toggleTheme', toggleTheme)

    return () => {
      themeEventManager.removeListener('toggleTheme', toggleTheme)
    }
  }, [themeEventManager, toggleTheme])

  return {
    themeConfig,
    themeName: theme === 'dark' ? 'darkTheme' : 'lightTheme'
  }
}
