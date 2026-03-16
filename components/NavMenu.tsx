import styles from '@/styles/Home.module.css'
import Image from 'next/image';
import ButtonPrimary from './ButtonPrimary';

export default function NavMenu() {
    return (
        <div className='z-10 top-12 fixed w-full px-32'>
            <nav className='z-20 px-6 py-3 bg-white rounded-3xl flex flex-row items-center justify-between text-black border border-gray-200 shadow-md'>
                <div className='flex gap-x-2'>
                    <Image src="/images/favicon.svg" alt="Logo" width={20} height={20} />
                    <a href='#main' className='hover:underline text-sm font-light'>AMunim.me</a>
                </div>
                <div id="menu-items-container" className='flex flex-row gap-x-4'>
                    <a href="#pricing" className='font-light text-sm'>
                        Experience
                    </a>
                    <a href="#contributions" className='font-light text-sm'>
                        Contributions
                    </a>
                    <a href="#contact" className='font-light text-sm'>
                        Get in Touch
                    </a>
                </div>
                <div>
                    <ButtonPrimary>Download CV</ButtonPrimary>
                </div>
            </nav>
        </div>
    );
}