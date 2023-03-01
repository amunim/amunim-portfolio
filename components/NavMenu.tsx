import styles from '@/styles/Home.module.css'

export default function NavMenu() {

    return (
        <nav className='flex flex-row justify-between px-16'>
            <div id="header-logo" className='h-full font-bold'>
                <div id='header-logo-icon' ></div>
                <a href='#main' className='text-white hover:underline'>amunim.me</a>
            </div>

            <div id="menu-items-container" className='flex flex-row'>
                <a href='#services' className={styles['menu_button']}>
                    SERVICES
                </a>
                <a className={styles['menu_button']}>
                    PORTFOLIO
                </a>
                <a className={styles['menu_button']}>
                    PRICING
                </a>
            </div>
        </nav>
    );
}