import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavMenu from '@/components/NavMenu'
import { useEffect, useRef, useState } from 'react'
import PortfolioItem from '@/components/PortfolioItem'
import { getPortfolioItems, PortfolioParams } from '@/services/portfolioService'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Tooltip from '@/components/Tooltip'
import useOnScreen from '@/hooks/useOnScreen'

export const getServerSideProps: GetServerSideProps<{ portfolio: PortfolioParams[] }> = async (context) => {
  const portfolio: PortfolioParams[] = await getPortfolioItems();
  return {
    props: { portfolio }
  }
}

export default function Home({ portfolio }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [navBarPosition, setNavBarPosition] = useState("");
  const [tooltipVisiblity, setTooltipVisiblity] = useState(false);
  const expirienceRef = useRef(null);
  const isExpirienceDivVisible = useOnScreen(expirienceRef);

  function onScroll() {
    if (window.scrollY > 0)
      setNavBarPosition("sticky");
    else
      setNavBarPosition("");
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  })

  return (
    <>
      <Head>
        <title>Abdul Munim | Software Engineer</title>
        <meta name="description" content="Software Engineer, Full-stack Web Developer, .Net developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={`absolute ${navBarPosition} py-7 w-full top-0 bg-transparent z-[100] headerMenu`}>
        <NavMenu />
      </header>
      <main id='main' className='bg-white w-full'>
        <section id={styles.intro} className="text-white">
          <div id={styles.intro_inner}>
            <div id={styles.intro_divider}>
              <div className='text-center pt-24 pb-20 px-7 mx-auto'>
                <div className='flex'>
                  <div className='mx-auto w-2/3 basis-2/3 px-7 fade-in'>
                    <h1 className='uppercase font-bold text-lg'>
                      Software Enginner |
                      <br />
                      <span>Full Stack Web Developer</span>
                    </h1>
                    <p className='mx-auto max-w-md text-base'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda perferendis, adipisci consequuntur maxime iusto iste consectetur! Deleniti, fugit? Fugiat reiciendis ab commodi odit sed quas! Sed cum culpa obcaecati totam.
                    </p>
                    <a href="#portfolio" className={`btn ${styles["secondary-button"]} z-[1000] relative`}>Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className='pt-4 z-[1000] relative'>
          <article className="container pt-0 mx-auto px-7 lg:pb-20">
            <div>
              <div className='overflow-hidden'>
                <ul className='flex flex-row text-center after:content-[" "] after:block'>
                  <li className='lg:min-w-[30rem] pb-8 mx-1 px-8 flex flex-col fade-in'>
                    <svg className='icon overflow-hidden align-middle'>
                    </svg>
                    <h4 className='color-primary uppercase'>ecommerce</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, incidunt esse! Quod placeat earum facere laborum voluptates numquam quis consequuntur cupiditate! Quis est repudiandae quod. Molestiae iste quidem quia quas!</p>
                  </li>
                  <li className='lg:min-w-[30rem] pb-8 mx-1 px-8 flex flex-col fade-in'>
                    <svg className='icon overflow-hidden align-middle'>
                    </svg>
                    <h4 className='color-primary uppercase'>ecommerce</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, incidunt esse! Quod placeat earum facere laborum voluptates numquam quis consequuntur cupiditate! Quis est repudiandae quod. Molestiae iste quidem quia quas!</p>
                  </li>
                  <li className='lg:min-w-[30rem] pb-8 mx-1 px-8 flex flex-col fade-in'>
                    <svg className='icon overflow-hidden align-middle'>
                    </svg>
                    <h4 className='color-primary uppercase'>ecommerce</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, incidunt esse! Quod placeat earum facere laborum voluptates numquam quis consequuntur cupiditate! Quis est repudiandae quod. Molestiae iste quidem quia quas!</p>
                  </li>
                  <li className='lg:min-w-[30rem] pb-8 mx-1 px-8 flex flex-col'>
                    <svg className='icon overflow-hidden align-middle'>
                    </svg>
                    <h4 className='color-primary uppercase'>ecommerce</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, incidunt esse! Quod placeat earum facere laborum voluptates numquam quis consequuntur cupiditate! Quis est repudiandae quod. Molestiae iste quidem quia quas!</p>
                  </li>
                </ul>
              </div>
              <div>
                <button className='absolute opacity-20 border-none top-[45%] left-0 slideshow-control'>&lt;</button>
                <button className='absolute opacity-20 border-none top-[45%] right-0 slideshow-control'>&gt;</button>
              </div>
              <div className='text-center'>
                <a href='#portfolio' className='btn btn-secondary'>Learn More</a>
              </div>
            </div>
          </article>
        </section>
        <section id="portfolio">
          <h1 className='text-center uppercase text-gray-600'>Portfolio</h1>
          {
            portfolio.map(x => <><hr /><PortfolioItem {...x} key={x.Id} /></>)
          }
        </section>
        <section id="pricing" className='bg-primary py-20'>
          <Tooltip text='dummy text' visiblity={tooltipVisiblity} />
          <h2 className='text-base uppercase spacing tracking-widest text-white text-center mb-20'>experiences</h2>
          <div className='container mx-auto pt-6 px-8'>
            <div className='text-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-16'>
              <div className='mx-auto px-7 w-full'>
                <div className={`experience-box relative translate-y-[10%] ${(isExpirienceDivVisible ? "!translate-y-[-10%] !opacity-100": "")}`}>
                  <h3 className='uppercase text-base relative z-30 text-[#777]'>Basic</h3>
                  <ul className='feature-list'>
                    <li onMouseOver={() => setTooltipVisiblity(true)} onMouseOut={() => setTooltipVisiblity(false)} className="cursor-pointer">Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                  </ul>
                  <div>
                    <a href='#portfolio' className='btn btn-sm mt-4 btn-gray hover:bg-black hover:text-white '>Request quote</a>
                  </div>
                </div>
              </div>
              <div className='mx-auto p-7 w-full'>
                <div className={`experience-box relative before:bg-[#7205f7] after:bg-[#5826a082] translate-y-[20%] ${(isExpirienceDivVisible ? "!translate-y-[-10%] !opacity-100": "")}`}>
                  <h3 className='uppercase text-base relative z-30 text-white'>Basic</h3>
                  <ul className='feature-list'>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                  </ul>
                  <div>
                    <a href='#portfolio' className='btn btn-sm mt-4 btn-primary'>Request quote</a>
                  </div>
                </div>
              </div>
              <div className='mx-auto p-7 w-full'>
                <div ref={expirienceRef} className={`experience-box relative before:bg-[#ffcd00] after:bg-[#e4ba34] translate-y-[30%] ${(isExpirienceDivVisible ? "!translate-y-[-10%] !opacity-100": "")}`}>
                  <h3 className='uppercase text-base relative z-30 text-white'>Basic</h3>
                  <ul className='feature-list'>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                    <li>Website Audit</li>
                    <li>Design</li>
                    <li>Development</li>
                  </ul>
                  <div>
                    <a href='#portfolio' className='btn btn-sm mt-4 !text-[#FFF] border-[#ffcb05] bg-[#ffcb05]'>Request quote</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer id='contact'>
          <div className='lg:w-[35rem] md:w-[25rem] sm:w-[21rem] w-[15rem] mx-auto mt-3 pb-12'>
            <div className='text-center text-9xl'>
              <h1>Get in touch</h1>
            </div>
            <form>
              <fieldset>
                <div className='mb-6'>
                  <div className='uppercase text-[#9c9c9c] mb-2'>
                    <label>Email</label>
                  </div>
                  <input type="email" name='email' className='border rounded px-1 w-full py-2' />
                </div>
              </fieldset>
              <fieldset className='pb-6'>
                <div className='uppercase text-[#9c9c9c] mb-2'>
                  <label>Message</label>
                </div>
                <textarea name='message' className='w-full border rounded px-1' aria-multiline="true" rows={5}>
                </textarea>
              </fieldset>
              <div className='text-center'>
                <input type="submit" className='btn btn-primary'/>
              </div>
            </form>
          </div>
          <div className='mb-32'>
            <ul className='flex flex-row justify-center align-middle footer-navbar text-[#9c9c9c]'>
              <li>
                <a href='https://www.linkedin.com/in/abdul-munim-x2002x/'>LinkedIn</a>
              </li>
              <li>
                <a href='mailto:amunim@amunim.me'>Email</a>
              </li>
              <li>
                <a href='https://github.com/amunim'>GitHub</a>
              </li>
              <li>
                <a href='https://www.upwork.com/freelancers/~016f42c0501a199670'>Upwork</a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  )
}
