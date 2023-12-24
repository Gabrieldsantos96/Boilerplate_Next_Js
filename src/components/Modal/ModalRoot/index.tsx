import ReactPortal from '@/components/Portal'
import * as S from './styles'
import React from 'react'

const ModalRoot = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactPortal containerId="modal__container">
      <S.Overlay>
        <S.Wrapper>{children}</S.Wrapper>
      </S.Overlay>
    </ReactPortal>
  )
}

export default ModalRoot
