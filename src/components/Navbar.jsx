import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import Cookies from 'js-cookie';
const Menu = () => {
    const {t} = useTranslation();
    return (
        <React.Fragment>
            <div className="arsolaire__navbar-links_container">
                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    <Link href="/">{t('navbar.home')}</Link>
                </p>
                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    <Link href="/about">{t('navbar.about')}</Link>
                </p>
                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    <Link href="/catalog">{t('navbar.project')}</Link>
                </p>
                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    <Link href="/filiales">{t('navbar.fil')}</Link>
                </p>
                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    <Link href="/materiels">{t('navbar.mat')}</Link>
                </p>
                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    <Link href="/blogs">Blogs</Link>
                </p>
                <p onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                    <Link href="/contact">{t('navbar.contact')}</Link>
                </p>
            </div>
        </React.Fragment>
    );
};

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [nav, setNav] = useState(false);
    const changeBackground = () => {
        if (typeof window !== "undefined") {
            if (window.scrollY >= 60) {
                setNav(true);
            } else {
                setNav(false);
            }
        }
    };
    const { t, i18n } = useTranslation();
    const OnChangeLanguage = (e) => {
        const selectedLanguage = e.target.value;
        i18n.changeLanguage(selectedLanguage);
        Cookies.set('selectedLanguage', selectedLanguage);
    };
    useEffect(() => {
        window.addEventListener("scroll", changeBackground);
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    }, []);
    return (
        <React.Fragment>
            <div className={nav ? "arsolaire__navbar active" : "arsolaire__navbar"}>
                <div className="arsolaire__navbar-links_logo">
                    <Image src={logo} alt="ETM Logo" />
                </div>
                <div className="">
                    <select className="form-select" aria-label="Default select example" onChange={OnChangeLanguage} value={i18n.language}>
                        <option value="en" className="eden__lang">English</option>
                        <option value="fr" className="eden__lang">Français</option>
                    </select>
                </div>
                <div className="arsolaire__navbar-links">
                    <Menu />

                </div>
                <div className="arsolaire__navbar-menu">
                    {toggleMenu ? (
                        <RiCloseLine
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(false)}
                        />
                    ) : (
                        <RiMenu3Line
                            color="#fff"
                            size={27}
                            onClick={() => setToggleMenu(true)}
                        />
                    )}
                    {toggleMenu && (
                        <div className="arsolaire__navbar-menu_container scale-up-center">
                            <div className="arsolaire__navbar-menu_container-links">
                                <p>
                                    <Link href="/" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }} >{t('navbar.home')}</Link>
                                </p>
                                <p>
                                    <Link href="/about" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>
                                        {t('navbar.about')}
                                    </Link>
                                </p>
                                <p>
                                    <Link href="/catalog" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.project')}</Link>
                                </p>
                                <p>
                                    <Link href="/filiales" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.fil')}</Link>
                                </p>
                                <p>
                                    <Link href="/materiels" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.mat')}</Link>
                                </p>
                                <p>
                                    <Link href="/blogs" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>Blogs</Link>
                                </p>
                                <p>
                                    <Link href="/contact" onClick={() => { setToggleMenu(false); window.scrollTo({ top: 0, behavior: "smooth" }) }}>{t('navbar.contact')}</Link>
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </React.Fragment>
    );
};

export default Navbar;
