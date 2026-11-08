import Head from 'next/head'
import NavMenu from '@/components/NavMenu'
import { getPortfolioItems, PortfolioParams } from '@/services/portfolioService'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { ContributionParams, getContributionItems } from '@/services/contributionService'
import Footer from '@/components/Footer'
import IndexServices from '@/components/indexPage/IndexServicesSection'
import IndexPortfolioSection from '@/components/indexPage/IndexPortfolioSection'
import IndexPricingSection from '@/components/indexPage/IndexPricingSection'
import IndexContributionsSection from '@/components/indexPage/IndexContributionsSections'
import IndexIntroSection from '@/components/indexPage/IndexIntroSection'
import { getIsSsrMobile } from '@/hooks/useIsMobile'
import TawkIntegration from '@/components/TawkIntegration'

export const getServerSideProps: GetServerSideProps<{ portfolio: PortfolioParams[], contributions: ContributionParams[] }> = async (context) => {
  const portfolio: PortfolioParams[] = await getPortfolioItems();
  const contributions: ContributionParams[] = await getContributionItems();
  return {
    props: { portfolio, contributions, isSsrMobile: getIsSsrMobile(context) }
  }
}

export default function Home({ portfolio, contributions }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const title = 'Abdul Munim | Full-stack developer for booking, accounting and POS software'
  const description = 'Freelance full-stack developer building rental booking, accounting and point-of-sale systems in C# and TypeScript. Top Rated on Upwork.'
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

      <a href="#main" className="skip-link">Skip to content</a>
      <header className="site-header">
        <NavMenu />
      </header>
      <main id='main'>
        <TawkIntegration />
        <IndexIntroSection />
        <IndexPortfolioSection portfolioItems={portfolio} />
        <IndexServices />
        <IndexPricingSection />
        <IndexContributionsSection contributions={contributions} />
      </main>
      <Footer />
    </>
  )
}
