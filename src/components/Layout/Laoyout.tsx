import { Fragment } from "react";
import Header from "./Header";
import Footer from "./Footer";
// import Navbar from "./Navbar";

const Layout: React.FC = (props) => {
  return (
    <Fragment>
      <Header />
      {/* <Navbar /> */}
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
