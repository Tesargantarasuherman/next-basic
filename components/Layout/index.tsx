import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";

interface LayoutProps{
    children:ReactNode
}
const Layout = (props:LayoutProps) => {
  const { children } = props;
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
