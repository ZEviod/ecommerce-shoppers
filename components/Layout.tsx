import Navbar from "./Navbar";
import TopFooter from "./TopFooter";
import Footer from "./Footer";
import { ReactElement } from "react";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <TopFooter />
      <Footer />
    </>
  );
};

export default Layout;
