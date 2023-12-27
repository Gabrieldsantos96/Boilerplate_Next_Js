'use client'

import { toggleTheme } from '@/utils/helpers/toggleTheme'
import * as S from './styles'
import Checkbox from '../Toggle'

const Main = ({
  title = 'Boilerplate Next JS',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <S.Wrapper>
      <Checkbox onCheck={toggleTheme} label="Toggle theme" />
      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
          src="/img/hero-illustration.svg"
          alt="Um desenvolvedor de frente para uma tela com código."
        />
      </S.Content>
    </S.Wrapper>
  )
}

export default Main
