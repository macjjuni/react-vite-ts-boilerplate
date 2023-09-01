import styled from '@emotion/styled'
import { ILayout } from '..'

const FooterStyled = styled.footer<ILayout>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: ${({ style }) => style.height};
`
export default FooterStyled
