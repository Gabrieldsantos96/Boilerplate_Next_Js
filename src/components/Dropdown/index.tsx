import * as S from './styles'
import { useDropdown } from './useDropdown'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const { isOpen, toggleIsOpen } = useDropdown()
  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Title onClick={toggleIsOpen}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
      <S.Overlay aria-hidden={!isOpen} onClick={toggleIsOpen} />
    </S.Wrapper>
  )
}

export default Dropdown
