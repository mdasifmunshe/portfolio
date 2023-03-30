import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Contact />
      <div className="h-1 bg-gradient-to-r from-sky-500 to-indigo-500" />
      <Footer />
    </div>
  );
};

export default Layout;
