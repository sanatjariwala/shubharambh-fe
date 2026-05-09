'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"

export default function Header3({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header>
                <div className="header-top tertiary-header-top space-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-7 col-lg-12 col-md-12 ">
                                <div className="header-welcome-text">
                                    <span>Welcome to our international shop! Enjoy free shipping on orders ₹1000  up.</span>
                                    <Link href="#">Shop Now<i className="fal fa-long-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-5 d-none d-xl-block">
                                <div className="headertoplag d-flex align-items-center justify-content-end">
                                    <div className="headertoplag__lang">
                                        <ul>
                                            <li>
                                                <Link href="#"><i className="fal fa-user" /> Account</Link>
                                                <Link className="order-tick" href="#"><i className="fal fa-plane-departure" />Track Your Order</Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="menu-top-social">
                                        <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                        <Link href="#"><i className="fab fa-twitter" /></Link>
                                        <Link href="#"><i className="fab fa-behance" /></Link>
                                        <Link href="#"><i className="fab fa-youtube" /></Link>
                                        <Link href="#"><i className="fab fa-linkedin" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-area green-logo-area mt-30 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="logo">
                                    <Link href="/"><img src="/assets/img/logo/shubharambh.png" alt="logo" style={{ maxHeight: "50px", width: "auto" }} /></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="header-meta-info d-flex align-items-center justify-content-end">
                                    <div className="header-meta header-brand d-flex align-items-center">
                                        <div className="header-meta__social d-flex align-items-center ml-25">
                                            <button className="header-cart p-relative tp-cart-toggle" onClick={handleCartSidebar}>
                                                <i className="fal fa-shopping-cart" />
                                                <CartShow />
                                            </button>
                                            <Link href="/sign-in"><i className="fal fa-user" /></Link>
                                            <Link href="/wishlist" className="header-cart p-relative tp-cart-toggle">
                                                <i className="fal fa-heart" />
                                                <WishListShow />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-area tertiary-main-menu mt-25 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-9 col-lg-9">
                                <div className="main-menu d-flex justify-content-center">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="has-dropdown">
                                                <Link href="/">Home</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/">Wooden  Home</Link></li>
                                                    <li><Link href="/index-2">Fashion Home</Link></li>
                                                    <li><Link href="/index-3">Furniture Home</Link></li>
                                                    <li><Link href="/index-4">Cosmetics Home</Link></li>
                                                    <li><Link href="/index-5">Food Grocery</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="/shop">Shop</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/shop">Shop</Link></li>
                                                    <li><Link href="/shop-2">Shop 2</Link></li>
                                                    <li><Link href="/shop-details">Shop Details </Link></li>
                                                    <li><Link href="/shop-details-2">Shop Details 2</Link></li>
                                                    <li><Link href="/shop-location">Shop Location</Link></li>
                                                    <li><Link href="/cart">Cart</Link></li>
                                                    <li><Link href="/sign-in">Sign In</Link></li>
                                                    <li><Link href="/checkout">Checkout</Link></li>
                                                    <li><Link href="/wishlist">Wishlist</Link></li>
                                                    <li><Link href="/track">Product Track</Link></li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown has-megamenu">
                                                <Link href="/about">Pages</Link>
                                                <ul className="submenu mega-menu">
                                                    <li>
                                                        <a className="mega-menu-title">Page layout</a>
                                                        <ul>
                                                            <li><Link href="/shop">Shop filters v1</Link></li>
                                                            <li><Link href="/shop-2">Shop filters v2</Link></li>
                                                            <li><Link href="/shop-details">Shop sidebar</Link></li>
                                                            <li><Link href="/shop-details-2">Shop Right sidebar</Link></li>
                                                            <li><Link href="/shop-location">Shop List view</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="mega-menu-title">Page layout</a>
                                                        <ul>
                                                            <li><Link href="/about">About</Link></li>
                                                            <li><Link href="/cart">Cart</Link></li>
                                                            <li><Link href="/checkout">Checkout</Link></li>
                                                            <li><Link href="/sign-in">Sign In</Link></li>
                                                            <li><Link href="/sign-in">Log In</Link></li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <a className="mega-menu-title">Page type</a>
                                                        <ul>
                                                            <li><Link href="/track">Product Track</Link></li>
                                                            <li><Link href="/wishlist">Wishlist</Link></li>
                                                            <li><Link href="/not-found">404 / Error</Link></li>
                                                            <li><Link href="/coming-soon">Coming Soon</Link></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="has-dropdown">
                                                <Link href="/blog">Blog</Link>
                                                <ul className="submenu">
                                                    <li><Link href="/blog">Blog</Link></li>
                                                    <li><Link href="/blog-details">Blog Details</Link></li>
                                                </ul>
                                            </li>
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3">
                                <div className="menu-contact">
                                    <ul>
                                        <li>
                                            <div className="menu-contact__item">
                                                <div className="menu-contact__icon">
                                                    <i className="fal fa-phone" />
                                                </div>
                                                <div className="menu-contact__info">
                                                    <Link href="/tel:0123456">908. 408. 501. 89</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="menu-contact__item">
                                                <div className="menu-contact__icon">
                                                    <i className="fal fa-map-marker-alt" />
                                                </div>
                                                <div className="menu-contact__info">
                                                    <Link href="/shop-location">Find Store</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
