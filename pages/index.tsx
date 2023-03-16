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
import ContributionCard from '@/components/ContributionCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { ContributionParams, getContributionItems } from '@/services/contributionService'
// import {Swiper} from "swiper";

export const getServerSideProps: GetServerSideProps<{ portfolio: PortfolioParams[], contributions: ContributionParams[] }> = async (context) => {
  const portfolio: PortfolioParams[] = await getPortfolioItems();
  const contributions: ContributionParams[] = await getContributionItems();
  return {
    props: { portfolio, contributions }
  }
}

export default function Home({ portfolio, contributions }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [navBarPosition, setNavBarPosition] = useState("");
  const [tooltipVisiblity, setTooltipVisiblity] = useState(false);
  const [startingClasses, setStartingClasses] = useState("");
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
    setStartingClasses("opacity-100");

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
        <section id={styles.intro} className="text-white lg:mb-12">
          <div id={styles.intro_inner}>
            <div id={styles.intro_divider}>
              <div className='text-center pt-24 pb-20 px-7 mx-auto'>
                <div className='flex'>
                  <div className='mx-auto w-2/3 basis-2/3 px-7 fade-in'>
                    <h1 className='uppercase font-bold text-4xl'>
                      | Software Enginner |
                      <br />
                      <span className='text-yellow-300'>Full Stack Web Developer</span>
                    </h1>
                    <p className='mx-auto max-w-md text-base'>
                      Building enterprise software solutions, a team player, preferring TDD over faster MVP, big fan of typed languages such as typescript or C#, but choosing the right tools for the job rather than the job for already learnt skills. Mostly expirienced as a full-stack web developer.
                    </p>
                    <a href="#portfolio" className={`btn ${styles["secondary-button"]} z-[10000] relative`}>Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className='pt-4 z-[1000] relative'>
          <article className="container pt-0 mx-auto lg:px-7 pb-20">
            <div>
              <div className='overflow-hidden lg:px-12'>
                <Swiper
                  modules={[Navigation]}
                  loop={true}
                  slidesPerView={1}
                  onSlideChange={() => console.log("slide change")}
                  allowTouchMove={true}
                  loopPreventsSliding={false}
                  parallax={true}
                  wrapperClass='flex flex-row text-center after:content-[" "] after:block'
                  navigation={{ nextEl: ".swiper-next-btn", prevEl: ".swiper-prev-btn" }}>
                  <SwiperSlide className={`lg:!min-w-[30vw] md:!min-w-[45vw] min-w-[96vw] pb-8 md::mx-1 md:px-8 flex flex-col opacity-0 transition-op ${startingClasses}`}>
                    <div className='w-full h-full relative'>
                      <Image alt="Development Icon" fill layout='fill' objectFit='contain' className='icon overflow-hidden align-top'
                        src="/services/developmentIcon.svg" />
                    </div>
                    <h4 className='color-primary uppercase'>Custom Software Development</h4>
                    <p>World-class custom software development services designed specifically for your business' exclusive needs to make your workflows more efficient, delivered at a fixed cost or on a time and materials basis.</p>
                  </SwiperSlide>
                  <SwiperSlide className={`lg:!min-w-[30vw] md:!min-w-[45vw] min-w-[96vw] pb-8 mx-1 px-8 flex flex-col opacity-0 transition-op ${startingClasses}`} >
                    <div className='w-full h-full relative'>
                      <Image alt="Database Icon" fill layout='fill' objectFit='contain'
                        className='icon overflow-hidden align-middle'
                        src="/services/dbIcon.svg" />
                    </div>
                    <h4 className='color-primary uppercase'>Database design</h4>
                    <p>SQL vs NoSQL, building entity relationships, sketching the ER diagram, handling vertical and horizontal scaling on large projects or developing on existing solutions.</p>
                  </SwiperSlide>
                  <SwiperSlide className={`lg:!min-w-[30vw] md:!min-w-[45vw] min-w-[96vw] pb-8 mx-1 px-8 flex flex-col opacity-0 transition-op ${startingClasses}`}>
                    <div className='w-full h-full relative'>
                      <Image alt="Unit Testing Icon" fill layout='fill' objectFit='contain'
                        className='icon overflow-hidden align-middle'
                        src="/services/testingIcon.svg" />
                    </div>
                    <h4 className='color-primary uppercase'>Test Driven Development</h4>
                    <p>Unit testing functions, modules, integrating testing APIs, transctions. Expirience using XUnit, Jest, Puppeteer for end-to-end testing and Storybooks for react components</p>
                  </SwiperSlide>
                  <SwiperSlide className={`lg:!min-w-[30vw] md:!min-w-[45vw] min-w-[96vw] pb-8 mx-1 px-8 flex flex-col opacity-0 transition-op ${startingClasses}`}>
                    <div className='w-full h-full relative'>
                      <Image alt='Design Icon' fill layout='fill' objectFit='contain' className='icon overflow-hidden align-middle'
                        src="/services/designIcon.svg" />
                    </div>
                    <h4 className='color-primary uppercase'>DDD (Domain Driven Design)</h4>
                    <p>Monolithic or Microservices, dividing the solution into Core, infrastructure, Persistence, FE projects greatly increases the modularity and consistency of the solution</p>
                  </SwiperSlide>
                  <SwiperSlide className={`lg:!min-w-[30vw] md:!min-w-[45vw] min-w-[96vw] pb-8 mx-1 px-8 flex flex-col opacity-0 transition-op ${startingClasses}`}>
                    <div className='w-full h-full relative'>
                      <Image alt="Development Icon" fill layout='fill' objectFit='contain' className='icon overflow-hidden align-top'
                        src="/services/uiIcon.svg" />
                    </div>
                    <h4 className='color-primary uppercase'>Turn an idea into reality</h4>
                    <p>If you have your designed developed on figma or have wireframes and need to turn that into a live website or desktop application then this can </p>
                  </SwiperSlide>
                  <SwiperSlide className={`lg:!min-w-[30vw] md:!min-w-[45vw] min-w-[96vw] pb-8 mx-1 px-8 flex flex-col opacity-0 transition-op ${startingClasses}`}>
                    <div className='w-full h-full relative'>
                      <Image alt='ECommerce Icon' fill layout='fill' objectFit='contain' className='icon overflow-hidden align-top'
                        src="/services/ecommerceIcon.svg" />
                    </div>
                    <h4 className='color-primary uppercase'>ecommerce</h4>
                    <p>Get a lead in the eCommerce field by adopting a cutting-edge tech stack. From design, develop, implement, to maintain market-leading eCommerce applications for you.</p>
                  </SwiperSlide>
                  <SwiperSlide className={`lg:!min-w-[30vw] md:!min-w-[45vw] min-w-[96vw] pb-8 mx-1 px-8 flex flex-col opacity-0 transition-op ${startingClasses}`}>
                    <div className='relative align-middle h-44'>
                        <Image alt="CRM Icon" fill layout='fill' objectFit='contain' className='icon overflow-hidden align-top'
                          src="/services/crmIcon.svg" />
                    </div>
                    <h4 className='color-primary uppercase'>CRM</h4>
                    <p>Building a CRM application for your business needs tailored to your business model or developing on top of an existing solution</p>
                  </SwiperSlide>
                </Swiper>
              </div>
              <div>
                <button className='absolute border-none top-[45%] left-0 slideshow-control swiper-prev-btn'>&lt;</button>
                <button className='absolute border-none top-[45%] right-0 slideshow-control swiper-next-btn'>&gt;</button>
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
            <div className='text-center grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-36'>
              <div className='mx-auto'>
                <div className={`experience-box relative opacity-100 lg:opacity-25 lg:translate-y-[5%] ${(isExpirienceDivVisible ? "lg:!translate-y-[0%] lg:!opacity-100" : "")}`}>
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
              <div className='mx-auto'>
                <div className={`experience-box relative opacity-100 lg:opacity-25  before:bg-[#7205f7] after:bg-[#5826a082] lg:translate-y-[15%] ${(isExpirienceDivVisible ? "lg:!translate-y-[5%] lg:!opacity-100" : "")}`}>
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
              <div className='mx-auto'>
                <div ref={expirienceRef} className={`experience-box relative before:bg-[#ffcd00] opacity-100 lg:opacity-25 after:bg-[#e4ba34] lg:translate-y-[25%] ${(isExpirienceDivVisible ? "lg:!translate-y-[10%] lg:!opacity-100" : "")}`}>
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

        <section id="contributions" className='mt-5'>
          <div className='container text-center'>
            <h1 className='-mb-[2px] text-4xl'>Open Source Contributions</h1>
            <p className='text-gray-500'>some of my open source contributions</p>
          </div>
          <div className='lg:px-72'>
            <div className='container flex flex-row mx-auto justify-between flex-wrap'>
              {contributions.map(x => <ContributionCard {...x} />)}
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
                <input type="submit" className='btn btn-primary' />
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
              <li>
                <a href='https://stackoverflow.com/users/9138440/amunim'>StackOverflow</a>
              </li>
            </ul>
          </div>
        </footer>
      </main>
    </>
  )
}