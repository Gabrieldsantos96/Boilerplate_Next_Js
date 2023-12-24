import { EventManagerDataTransfer } from '@/components/Toast/ToastContainer/useToastContainer'
import EventManager from '@/lib/eventManager'

export const toastEventManager = new EventManager<EventManagerDataTransfer>()

export const showToast = ({
  type,
  text,
  duration
}: EventManagerDataTransfer) => {
  toastEventManager.emit('addToast', { type, text, duration })
}
