import styled from '@emotion/styled'
import { ILayout } from '..'

const MainStyled = styled.main<ILayout>`
  min-height: ${({ style }) => style.height};
`

export default MainStyled
