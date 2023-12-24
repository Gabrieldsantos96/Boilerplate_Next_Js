import animation from './animation'
import * as S from './styles'
import Image from 'next/image'
import { useToastMessage } from './useToastMessage'

export type MessageProps = {
  id: number
  text?: string
  type?: 'default' | 'success' | 'danger' | 'warning'
  duration?: number
}

export type ToastMessageProps = {
  message: MessageProps
  onRemoveMessage: (id: number) => void
}

const ToastMessage = ({ onRemoveMessage, message }: ToastMessageProps) => {
  const { handleRemoveToast } = useToastMessage({ onRemoveMessage, message })
  return (
    <S.Wrapper
      key={message.id}
      {...animation}
      type={message.type || 'default'}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
    >
      {message.type === 'danger' && (
        <Image src={'/icons/x-circle.svg'} alt="X" width={25} height={25} />
      )}
      {message.type === 'success' && (
        <Image
          src={'/icons/check-circle.svg'}
          alt="Check"
          width={25}
          height={25}
        />
      )}
      {message.type === 'warning' && (
        <Image
          src={'/icons/icon-warning.svg'}
          alt="Warning"
          width={25}
          height={25}
        />
      )}
      <strong>{message.text}</strong>
    </S.Wrapper>
  )
}

export default ToastMessage
