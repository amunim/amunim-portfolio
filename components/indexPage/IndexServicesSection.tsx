import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function IndexServices() {
    // PROPERTIES
    const [startingClasses, setStartingClasses] = useState("");

    // LOGIC
    useEffect(() => {
        setStartingClasses("opacity-100");
    })

    // UI
    return (
        <section id="services" className='pt-4 z-[1000] relative'>
            <article className="container pt-0 mx-auto lg:px-7 pb-20">
                <div>
                    <div className='overflow-hidden lg:px-12'>
                        <Swiper
                            modules={[Navigation]}
                            loop={true}
                            slidesPerView={"auto"}
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
                        <button className='absolute border-none top-[30%] left-0 slideshow-control swiper-prev-btn'>&lt;</button>
                        <button className='absolute border-none top-[30%] right-0 slideshow-control swiper-next-btn'>&gt;</button>
                    </div>
                    <div className='text-center'>
                        <a href='#portfolio' className='btn btn-secondary'>Learn More</a>
                    </div>
                </div>
            </article>
        </section>
    )
}