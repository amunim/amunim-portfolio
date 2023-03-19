import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react';

export default function NavMenu() {
    const [navBarPosition, setNavBarPosition] = useState("");
    const [transform, setTransform] = useState("left-show");

    function onScroll() {
        if (window.scrollY > 0)
            setNavBarPosition("sticky");
        else
            setNavBarPosition("");
    }

    function onMenuClick() {
        if (transform == "left-hide")
            setTransform("left-show");
        else
            setTransform("left-hide");
    }

    useEffect(() => {
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    })
    return (
        <>
            <div onClick={e => onMenuClick()} className='md:hidden fixed top-2 left-2 block w-8 h-8 z-[9999999] hover:cursor-pointer'>
                <svg viewBox='0 0 10 8' width='40'>
                    <path d='M1 1h8M1 4h 8M1 7h8'
                        stroke='#FFF'
                        stroke-width='1'
                        stroke-linecap='round' />
                </svg>
            </div>
            <div className={`${transform} absolute ${navBarPosition} md:py-7 max-md:h-full w-full md:top-0 bg-transparent headerMenu z-[100]`}>
                <nav className='max:md-w-[100%] max-md:h-[100vh] max-md:text-center max-md:bg-[#475569] flex flex-col md:flex-row justify-start md:justify-between md:px-16'>
                    <div id="header-logo" className='md:h-full font-bold pt-16 md:pt-0'>
                        <div id='header-logo-icon' ></div>
                        <a href='#main' className='text-white hover:underline'>amunim.me</a>
                    </div>

                    <div id="menu-items-container" className='flex flex-col my-auto md:my-0 md:flex-row'>
                        <a href='#services' className={styles['menu_button']}>
                            SERVICES
                        </a>
                        <a href="#portfolio" className={styles['menu_button']}>
                            PORTFOLIO
                        </a>
                        <a href="#pricing" className={styles['menu_button']}>
                            EXPIRIENCES
                        </a>
                    </div>
                </nav>
            </div>
        </>
    );
}