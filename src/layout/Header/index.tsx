import { Link } from 'react-router-dom'
import HeaderStyled from './style'
import { type ILayout } from '..'

const Header = ({ style }: ILayout) => {
  return (
    <HeaderStyled.Wrap style={style}>
      <Link to="/">
        <HeaderStyled.Logo>Logo</HeaderStyled.Logo>
      </Link>
    </HeaderStyled.Wrap>
  )
}

export default Header
