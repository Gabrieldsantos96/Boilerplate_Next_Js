import EventManager from '@/lib/eventManager'

export const themeEventManager = new EventManager<string>()

export const toggleTheme = () => {
  themeEventManager.emit('toggleTheme', '')
}
