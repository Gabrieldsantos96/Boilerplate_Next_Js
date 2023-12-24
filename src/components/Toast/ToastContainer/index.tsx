import { useToastContainer } from './useToastContainer'
import { toastEventManager } from '@/utils/helpers/showToast'
import ToastList from '../ToastList'

const ToastContainer = () => {
  const { handleRemoveMessage, messages } = useToastContainer({
    toastEventManager
  })
  return (
    <ToastList messages={messages} handleRemoveMessage={handleRemoveMessage} />
  )
}

export default ToastContainer
