import GlobalState from './GlobalState';
import { useEffect, useState, useContext } from "react";
import Link from 'next/link';

export default function Main(props) {

    const { triggerScroll } = useContext(GlobalState);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        triggerScroll();
    }, []);

    return (
        props?.menuItems ?
            <div>
                <div className="position-relative">
                    <img className="black-bg d-none d-xl-block" src="/img/header.png" alt="image1" />
                    <div className="social-media-header d-none d-xl-block">
                        {
                            props.activePage === 'abundance-therapies' ?
                                props.newSocialMedia?.map((socialItem, index) => (
                                    <Link href={socialItem.url} key={index}>
                                        <a target="_blank" >
                                            <img src={socialItem.full_path_icon} alt="image2" />
                                        </a>
                                    </Link>
                                ))
                                :
                                props.socialMedia?.map((socialItem, index) => (
                                    <Link href={socialItem.url} key={index}>
                                        <a target="_blank">
                                            <img src={socialItem.icon} alt="image2" />
                                        </a>
                                    </Link>
                                ))
                        }
                    </div>
                    <div className="container h-100 bg-header">
                        <div className="row w-100 pt-3 align-items-center">
                            <div className="col-auto col-lg-4">
                                <div className="logo-home">
                                    <Link href={'/'}>
                                        <a><img className="logo-main" src={props.activePage === 'abundance-therapies' ? '/img/abundance-invert-logo.svg' : '/img/logo.svg'} alt="image4" /></a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col d-xl-none d-flex justify-content-end p-0">
                                <div className={"nav-icon1 burger-button" + (mobileMenuOpen ? " open" : "")} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                            <div className="col-8 text-right mx-auto d-none d-xl-block">
                                <div className="menu-item d-inline-block">
                                    <Link href={"/about-us"} >
                                        <a className={props.activePage === 'about-us' ? 'menu-active' : ''}>{props.menuItems['about-us']}</a>
                                    </Link>
                                    <Link href={"/retreats"} >
                                        <a className={props.activePage === 'retreats' ? 'menu-active' : ''}>{props.menuItems['retreats']}</a>
                                    </Link>
                                    <Link href={"/abundance-therapies"}>
                                        <a className={props.activePage === 'abundance-therapies' ? 'menu-active' : ''}>{props.menuItems['abundance-therapies']}</a>
                                    </Link>
                                    <Link href={"/contact-us"}>
                                        <a className={props.activePage === 'contact-us' ? 'menu-active' : ''}>{props.menuItems['contact-us']}</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"d-xl-none py-5 text-center mobile-menu " + (mobileMenuOpen ? "fade-in" : "")}>
                    <div className="pb-1">
                        <Link href="/about-us">
                            <a className={props.activePage === 'about-us' ? 'menu-active' : ''}>{props.menuItems['about-us']}</a>
                        </Link>
                    </div>
                    <div className="pb-1">
                        <Link href={"/abundance-therapies"}>
                            <a className={props.activePage === 'abundance-therapies' ? 'menu-active' : ''}>{props.menuItems['abundance-therapies']}</a>
                        </Link>
                    </div>
                    <div className="pb-1">
                        <Link href="/retreats">
                            <a className={props.activePage === 'retreats' ? 'menu-active' : ''}>{props.menuItems['retreats']}</a>
                        </Link>
                    </div>
                    <div>
                        <Link href="/contact-us">
                            <a className={props.activePage === 'contact-us' ? 'menu-active' : ''}>{props.menuItems['contact-us']}</a>
                        </Link>
                    </div>
                </div>
                {props.children}
                <div className="footer position-relative">
                    <div className="news-letter w-100">
                        <div className="container py-lg-2">
                            <div className="row no-gutters justify-content-center align-items-center d-flex">
                                <div className="col-xl-7 col-lg-7 col-md-10 col-sm-10 col-xs-10 py-3">
                                    <div className="subscribe-area">
                                        <h2>{props.menuItems['subscribe-title']}</h2>
                                        <p>{props.menuItems['subscribe-message']}</p>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-10 col-sm-10 col-xs-10 py-3">
                                    <div className="news-letter-email">
                                        <form action="https://googlemail.us6.list-manage.com/subscribe/post?u=00997d3daad1b68ee80083fdb&amp;id=1680773808" method="post" target="_blank">
                                            <input type="email" name="EMAIL" placeholder="Email" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="menu-footer">
                        <div className="container py-lg-5">
                            <div className="row">
                                <div className="col-xl-3 col-lg-3 col-md-12 col-sm-6 col-xs-6 p-4">
                                    <Link href="/">
                                        <a ><img className="footer-logo" src="/img/logo.svg" alt="image6" /></a>
                                    </Link>
                                </div>
                                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-xs-12 my-auto">
                                    <div className="row my-auto">
                                        {/* <div className="col-xl-8 col-lg-6 col-md-12 col-sm-6 col-xs-12 my-auto"> */}
                                        <div className="col-12 col-lg-6 my-auto">
                                            <div className="footer-menu-items pb-lg-4">
                                                <Link href="/abundance-therapies">
                                                    <a>{props.menuItems['abundance-therapies']}</a>
                                                </Link>
                                            </div>
                                            <div className="footer-menu-items pb-lg-4">
                                                <Link href="/about-us">
                                                    <a>{props.menuItems['about-us']}</a>
                                                </Link>
                                            </div>
                                            <div className="footer-menu-items pb-lg-4">
                                                <Link href="/retreats">
                                                    <a>{props.menuItems['retreats']}</a>
                                                </Link>
                                            </div>
                                            {/* </div>
                                    <div className="col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12 my-auto"> */}

                                            <div className="footer-menu-items">
                                                <Link href="/contact-us">
                                                    <a >{props.menuItems['contact-us']}</a>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                            <div className="footer-social-icons">
                                                {
                                                    props.socialMedia?.map((socialItem, index) => (
                                                        <a className="pl-3" href={socialItem.url} target="_blank" rel="noreferrer" key={index}><img src={socialItem.icon} alt="image7" /></a>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright position-relative">
                        <h5 className="copy-r">Copyright The Abundance Retreat © 2021  - All rights reserved</h5>
                        <img className="footer-black-bg" src="/img/footer-bg-black.png" alt="image9" />
                        <img className="footer-img" src="/img/footer-tree.png" alt="image10" />
                    </div>
                </div>
            </div>
            :
            null
    )
}
