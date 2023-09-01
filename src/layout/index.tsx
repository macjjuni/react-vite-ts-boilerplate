import styled from '@emotion/styled'
import Header from '@/layout/Header'
import Main from '@/layout/Main'
import Footer from '@/layout/Footer'
import getLayoutSize from './layoutSize'

export interface ILayout {
  style: { height: string }
}

const { header, main, footer } = getLayoutSize()

const LayoutStyled = styled.div`
  height: 100dvh;
  max-width: 1200px;
  width: 100%;
`

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutStyled>
      <Header style={header} />
      <Main style={main}>{children}</Main>
      <Footer style={footer} />
    </LayoutStyled>
  )
}

export default Layout
