import Head from 'next/head'
import NavMenu from '@/components/NavMenu'
import Footer from '@/components/Footer'
import IndexHeroSection from '@/components/indexPage/IndexHeroSection'
import ProjectShowcase from '@/components/ProjectShowcase'
import IndexCapabilitiesSection from '@/components/indexPage/IndexCapabilitiesSection'
import IndexMoreWorkSection from '@/components/indexPage/IndexMoreWorkSection'
import IndexOpenSourceSection from '@/components/indexPage/IndexOpenSourceSection'
import IndexContactSection from '@/components/indexPage/IndexContactSection'
import TawkIntegration from '@/components/TawkIntegration'

const title = 'Abdul Munim | Software engineer for APIs, integrations and booking systems'
const description = 'Software engineer at iClosed (public API, OAuth, MCP server), founder of Cast and a Top Rated freelancer on Upwork.'

export default function Home() {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
      </Head>

      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-40 focus:rounded-lg focus:bg-zinc-900 focus:px-4 focus:py-2 focus:text-white">
        Skip to content
      </a>
      <NavMenu />
      <main id="main">
        <TawkIntegration />
        <IndexHeroSection />
        <ProjectShowcase />
        <IndexCapabilitiesSection />
        <IndexMoreWorkSection />
        <IndexOpenSourceSection />
        <IndexContactSection />
      </main>
      <Footer />
    </>
  )
}
