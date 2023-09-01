import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const ellipsis = keyframes`
  0% { content: '.'; }
  25% { content: '..'; }
  50% { content: '...'; }
  75% { content: '..'; }
  100% { content: '.'; }
`

const SpinnerStyled = styled.div`
  position: relative;
  font-size: 18px;
  margin: -4px 0;

  &::after {
    content: '.';
    position: absolute;
    bottom: 0;
    right: -60px;
    width: 56px;
    height: 100%;
    animation: ${ellipsis} 3.6s ease infinite;
    z-index: 100;
  }
`

export default SpinnerStyled
