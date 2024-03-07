import { Header } from '../Header/Header';
import Footer from '../Footer/Footer';
import { LayoutWrapper } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutWrapper>
  );
};

export default Layout;
