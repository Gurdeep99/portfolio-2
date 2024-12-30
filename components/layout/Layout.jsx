'use client';
import { useEffect, useState } from "react";
import AddClassBody from '../elements/AddClassBody';
import BackToTop from '../elements/BackToTop';
import DataBg from '../elements/DataBg';
import ImageHoverEffects from '../elements/ImageHoverEffects';
import Breadcrumb from './Breadcrumb';
import MobileMenu from './MobileMenu';
import Footer1 from './footer/Footer1';
import Footer2 from './footer/Footer2';
import Footer3 from './footer/Footer3';
import Header1 from "./header/Header1";
import Header2 from './header/Header2';
import Header3 from './header/Header3';

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(false);
    // Mobile Menu
    const [isMobileMenu, setMobileMenu] = useState(false);
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        !isMobileMenu ? document.body.classList.add("mobile-menu-active") : document.body.classList.remove("mobile-menu-active");
    };

    // Search
    const [isSearch, setSearch] = useState(false);
    const handleSearch = () => setSearch(!isSearch);

    // OffCanvas
    const [isOffCanvas, setOffCanvas] = useState(false);
    const handleOffCanvas = () => setOffCanvas(!isOffCanvas);

    useEffect(() => {
        const WOW = require('wowjs');
        window.wow = new WOW.WOW({
            live: false
        });

        // Initialize WOW.js
        window.wow.init();

        const handleScroll = () => {
            const scrollCheck = window.scrollY > 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);

    return (
        <>
            <div id="top" />
            <AddClassBody />
            <DataBg />
            <ImageHoverEffects />
            {!headerStyle && (
                <Header1 
                    scroll={scroll} 
                    isMobileMenu={isMobileMenu} 
                    handleMobileMenu={handleMobileMenu} 
                    isOffCanvas={isOffCanvas} 
                    handleOffCanvas={handleOffCanvas} 
                />
            )}
            {headerStyle === 1 && (
                <Header1 
                    scroll={scroll} 
                    isMobileMenu={isMobileMenu} 
                    handleMobileMenu={handleMobileMenu} 
                    isOffCanvas={isOffCanvas} 
                    handleOffCanvas={handleOffCanvas} 
                />
            )}
            {headerStyle === 2 && (
                <Header2 
                    scroll={scroll} 
                    isMobileMenu={isMobileMenu} 
                    handleMobileMenu={handleMobileMenu} 
                    isOffCanvas={isOffCanvas} 
                    handleOffCanvas={handleOffCanvas} 
                />
            )}
            {headerStyle === 3 && (
                <Header3 
                    scroll={scroll} 
                    isMobileMenu={isMobileMenu} 
                    handleMobileMenu={handleMobileMenu} 
                    isOffCanvas={isOffCanvas} 
                    handleOffCanvas={handleOffCanvas} 
                />
            )}
            <MobileMenu />

            <main className="main">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            {!footerStyle && <Footer1 />}
            {footerStyle === 1 && <Footer1 />}
            {footerStyle === 2 && <Footer2 />}
            {footerStyle === 3 && <Footer3 />}

            <BackToTop target="#top" />
        </>
    );
}
