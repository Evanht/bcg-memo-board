
import styled, { css } from 'styled-components'

const BaseHeaderStyles = css`
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
`

const BoldStyles = css`
  font-weight: 400;
`

const H1 = styled.h1`
  ${BaseHeaderStyles}
  font-size: 32px;
  ${({ bold }) => bold && BoldStyles}
`

const H2 = styled.h2`
  ${BaseHeaderStyles}
  font-size: 28px;
  ${({ bold }) => bold && BoldStyles}
`

const H3 = styled.h3`
  ${BaseHeaderStyles}
  font-size: 20px;
  ${({ bold }) => bold && BoldStyles}
`

const H4 = styled.h4`
  ${BaseHeaderStyles}
  font-size: 18px;
  ${({ bold }) => bold && BoldStyles}
`

const H5 = styled.h5`
  ${BaseHeaderStyles}
  font-size: 15px;
  ${({ bold }) => bold && BoldStyles}
`

const H6 = styled.h6`
  ${BaseHeaderStyles}
  font-size: 14px;
  ${({ bold }) => bold && BoldStyles}
`

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
