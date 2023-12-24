import * as S from './styles'

export type ModalTitleProps = {
  title: string
}

const ModalTitle = ({ title }: ModalTitleProps) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
  </S.Wrapper>
)

export default ModalTitle
