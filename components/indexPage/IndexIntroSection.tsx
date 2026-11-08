import type { CSSProperties } from 'react';

const step = (i: number) => ({ '--i': i } as CSSProperties);

export default function IndexIntroSection() {
    return (
        <section className='hero' aria-labelledby='hero-title'>
            <div className='wrap'>
                <div className='hero__copy' data-enter>
                    <h1 id='hero-title' className='hero__title' style={step(0)}>
                        Full-stack developer for booking, accounting and POS software
                    </h1>
                    <p className='hero__lede' style={step(1)}>
                        Abdul Munim designs and builds rental booking, accounting and point-of-sale systems in C# and TypeScript, test-first. Freelance, and leading a small team on a side project.
                    </p>
                    <div className='hero__actions' style={step(2)}>
                        <a href='#contact' className='btn btn-primary'>Contact me</a>
                        <a href='#work' className='link'>See the work</a>
                    </div>
                    <p className='hero__fact' style={step(3)}>
                        Top Rated on Upwork with a 100% job success score: more than 17 jobs since late 2021.
                    </p>
                </div>
                <div className='hero__print print' data-enter>
                    <img
                        style={step(2)}
                        src='/portfolio/goldener.gif'
                        width={864}
                        height={864}
                        alt='Crystal Mt. Cabins vacation rental site, scrolling through a searchable list of properties'
                    />
                </div>
            </div>
        </section>
    );
}
