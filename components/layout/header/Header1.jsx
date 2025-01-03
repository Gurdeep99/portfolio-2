import ThemeSwitch from "@/components/elements/ThemeSwitch";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import OffCanvas from "../OffCanvas";

export default function Header1({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isOffCanvas,
  handleOffCanvas,
}) {
  const data = {
    logo: "/assets/imgs/template/favicon.svg",
    logoName: "PORTFOLIO",
    social: [
      {
        id: 1,
        icon: "ri-facebook-fill",
        link: "https://www.facebook.com",
        name: "Facebook",
      },
      {
        id: 2,
        icon: "ri-twitter-fill",
        link: "http://twitter.com",
        name: "Facebook",
      },
      {
        id: 2,
        icon: "ri-twitter-x-fill",
        link: "http://twitter.com",
        name: "Facebook",
      },
    ],
  };
  return (
    <>
      <header>
        <nav
          className={`navbar navbar-expand-lg navbar-light w-100 flex-nowrap z-999 p-0 ${
            scroll ? "navbar-stick" : ""
          }`}
          style={{
            position: `${scroll ? "fixed" : "relative"}`,
            top: `${scroll ? "0" : "auto"}`,
          }}
        >
          <Link
            href="/#"
            className="navbar-menu p-4 text-center square-100 menu-tigger icon_80 icon-shape d-none d-md-flex"
            data-bs-target=".offCanvas__info"
            aria-controls="offCanvas__info"
            onClick={handleOffCanvas}
          >
            <i className="ri-menu-2-line" />
          </Link>
          <div className="container py-3 px-0">
            <Link
              className="navbar-brand d-flex main-logo align-items-center ms-lg-0 ms-md-5 ms-3"
              href="/"
            >
              <img src={data.logo} alt="infinia" />
              <span className="fs-4 ms-2">{data.logoName}</span>
            </Link>
            <div className="d-none d-lg-flex">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <Menu />
              </div>
            </div>
            <div className="navbar-social d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
              <div className="d-md-flex d-none gap-3">
                {data.social.map((item, index) => (
                  <Link href={item.link} key={index}>
                    <i className={`${item.icon} fs-18`} />
					
                  </Link>
                ))}
              </div>
              <div
                className="burger-icon burger-icon-white border rounded-3"
                onClick={handleMobileMenu}
              >
                <span className="burger-icon-top" />
                <span className="burger-icon-mid" />
                <span className="burger-icon-bottom" />
              </div>
            </div>
          </div>
          <ThemeSwitch />
        </nav>
        {/* offCanvas-menu */}
        <OffCanvas
          isOffCanvas={isOffCanvas}
          handleOffCanvas={handleOffCanvas}
        />
        <MobileMenu
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      </header>
    </>
  );
}
