import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import PropTypes from "prop-types";
import { FaAngleUp } from "react-icons/fa";
import Features from "../components/Features/Features";

export default function Layout({ children }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="gtco-loader" style={{ display: "none" }}></div>

      <div id="page">
        <Header />
        <main className="main-container pb-4">{children}</main>

        <Features/>

        <Footer />

        <div className="top-to-btm">
            {" "}
            {showTopBtn && (
                <FaAngleUp
                    className="icon-position icon-style"
                    onClick={goToTop}
                />
            )}{" "}
        </div>

      </div>
    </>
  );
}

Layout.proptypes = {
  children: PropTypes.node,
};
