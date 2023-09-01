'use client'
import Link from "next/link";
import React, { useState } from "react";

export default function Header({ overlay }: any) {

    const [toggle, setToggle] = useState(false);

    const style = {
        nav: overlay ? "flex items-center justify-between flex-wrap p-6 px-24 w-full z-10 top-0 fixed" : "flex items-center justify-between flex-wrap p-6 px-24 w-full z-10 top-0",
        logoUrl: overlay ? "/assets/logo_ncs_white.svg" : "/assets/logo_ncs_white.svg",
        textTitle: overlay ? "text-white text-lg font-semibold leading-snug" : "text-indigo-950 text-lg font-semibold leading-snug",
        textLink: overlay ? "text-white text-[15px] font-semibold leading-snug" : "text-zinc-700 text-[15px] font-semibold leading-snug"
    }


    return (
        <nav className={style.nav}>
            <Link href={"/"} className="flex items-center flex-shrink-0 text-white mr-6">
                {/* <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                </a> */}
                <div className="grow shrink basis-0 h-12 justify-start items-center gap-5 flex">
                    <div className="w-12 h-12 justify-center items-center flex">
                        <img className="grow shrink basis-0 self-stretch" src={style.logoUrl} />
                    </div>
                    <div className={style.textTitle}>NautiPro Connect <br />Solutions</div>
                </div>
            </Link>

            <div className="block lg:hidden">
                <button id="nav-toggle" onClick={() => setToggle(!toggle)} className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>

            <div className={`w-full flex-grow lg:flex lg:items-center bg-blend-multiply lg:w-auto lg:block py-6 lg:pb-0 lg:pt-0 ${toggle ? '' : 'hidden'}`} id="nav-content">

                <ul className="list-reset flex lg:flex-row flex-col justify-end flex-1 items-center p-2.5 items-center lg:gap-12 gap-5">
                    <li>
                        <div className={style.textLink}>ABOUT US</div>
                    </li>
                    <li>
                        <div className={style.textLink}>SERVICES</div>
                    </li>
                    <li>
                        <div className={style.textLink}>CAREERS</div>
                    </li>
                    <li>
                        <div className={style.textLink}>CONTACT US</div>
                    </li>
                </ul>
            </div>
        </nav >
    )
}
