'use client'

import { toggleTheme } from '@/utils/helpers/toggleTheme'
import * as S from './styles'

const Main = ({
  title = 'Boilerplate Next JS',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => {
  return (
    <>
      <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <S.Illustration
          src="/img/hero-illustration.svg"
          alt="Um desenvolvedor de frente para uma tela com código."
        />
        <button
          style={{
            background: '#F97171',
            padding: '1rem',
            marginTop: '1rem',
            border: 'none',
            borderRadius: '0.4rem'
          }}
          onClick={() => toggleTheme()}
        >
          toggleTheme
        </button>
      </S.Wrapper>
    </>
  )
}

export default Main
