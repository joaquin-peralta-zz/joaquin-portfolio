import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

type Props = {
  children: any;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
