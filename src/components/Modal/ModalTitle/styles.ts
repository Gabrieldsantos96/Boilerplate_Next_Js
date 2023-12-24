import styled, { css } from 'styled-components'

export const Wrapper = styled.header`
  ${() => css`
    display: flex;
    justify-content: flex-start;
  `}
`

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.gray[900]};
  `}
`
