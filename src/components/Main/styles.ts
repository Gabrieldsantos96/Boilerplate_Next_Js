'use client'

import styled, { css } from 'styled-components'
import { Wrapper as Toggle } from '@/components/Toggle/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    width: 100%;
    height: 100%;
    padding: 1rem;
    ${Toggle} {
      flex-direction: row-reverse;
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`
export const Content = styled.main`
  height: calc(100% - 4.1rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  margin-bottom: 2rem;
`

export const Title = styled.h1`
  font-size: 2.5rem;
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(30rem, 100%);
`
