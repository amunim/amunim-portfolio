import { useEffect, useState } from 'react';

const links = [
    { href: '#work', label: 'Work' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#open-source', label: 'Open source' },
];

export default function NavMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <div className='wrap'>
            <a href='#main' className='brand'>Abdul Munim</a>
            <button
                type='button'
                className='nav-toggle'
                aria-expanded={open}
                aria-controls='site-nav'
                onClick={() => setOpen(o => !o)}>
                {open ? 'Close' : 'Menu'}
            </button>
            <nav id='site-nav' aria-label='Main' className='nav-links' data-open={open}>
                {links.map(l => (
                    <a key={l.href} href={l.href} className='link' onClick={() => setOpen(false)}>{l.label}</a>
                ))}
                <a href='#contact' className='btn btn-primary' onClick={() => setOpen(false)}>Contact me</a>
            </nav>
        </div>
    );
}
