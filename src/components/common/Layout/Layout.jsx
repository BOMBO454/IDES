import Header from '../Header/Header'
import { Container } from './styled'
import Footer from '../Footer/Footer'

function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
