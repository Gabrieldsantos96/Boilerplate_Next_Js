import * as S from './styles'

export type ModalFooterProps = {
  confirmLabel: string
  cancelLabel: string
  isLoading?: boolean
  onClose?: () => void
  onConfirm?: () => void
}

const ModalFooter = ({
  isLoading,
  onClose,
  onConfirm,
  cancelLabel,
  confirmLabel
}: ModalFooterProps) => {
  if (!!onClose || !!onConfirm) {
    return (
      <S.Wrapper>
        <button onClick={onClose}>{cancelLabel}</button>
        <button
          disabled={isLoading}
          onClick={onConfirm}
          aria-disabled={isLoading}
          data-testid="styled-button"
        >
          {confirmLabel}
        </button>
      </S.Wrapper>
    )
  }
}

export default ModalFooter
