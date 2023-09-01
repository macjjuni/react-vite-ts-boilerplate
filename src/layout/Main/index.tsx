import MainStyled from './style'
import { ILayout } from '..'

interface IMain extends ILayout {
  children: React.ReactNode
}

const Main = ({ style, children }: IMain) => {
  return <MainStyled style={style}>{children}</MainStyled>
}

export default Main
