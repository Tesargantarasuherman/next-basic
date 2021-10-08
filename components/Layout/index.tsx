import Header from "../Header";
import Footer from "../Footer";
import { ReactNode } from "react";
import Head from 'next/head'

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
const Layout = (props: LayoutProps) => {
  const { children, pageTitle } = props;
  return (
    <div>
      <Head>
        <title>NEXT JS Basic | {pageTitle}</title>
        <meta name="description" content="Website Next Js Basic" />
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
