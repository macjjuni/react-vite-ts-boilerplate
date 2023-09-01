import styled from '@emotion/styled'
import { ILayout } from '..'

const HeaderStyled = {
  Wrap: styled.header<ILayout>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: ${({ style }) => style.height};
  `,
  Logo: styled.div`
    font-size: 20px;
    font-weight: bold;
    color: red;
  `,
}

export default HeaderStyled
