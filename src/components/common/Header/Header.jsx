import { HeaderLogo, HeaderWrapper } from './styled'
import Logo from '../../../images/SiteLogo.png'

function Header() {
  return (
    <HeaderWrapper>
      <HeaderLogo href="/">
        <img src={Logo} alt="" />
      </HeaderLogo>
    </HeaderWrapper>
  )
}

export default Header
