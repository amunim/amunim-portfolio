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

export const getServerSideProps: GetServerSideProps<{ portfolio: PortfolioParams[], contributions: ContributionParams[] }> = async (context) => {
  const portfolio: PortfolioParams[] = await getPortfolioItems();
  const contributions: ContributionParams[] = await getContributionItems();
  return {
    props: { portfolio, contributions, isSsrMobile: getIsSsrMobile(context) }
  }
}

export default function Home({ portfolio, contributions }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Abdul Munim | Software Engineer</title>
        <meta name="description" content="Software Engineer, Full-stack Web Developer, .Net developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header>
        <NavMenu />
      </header>
      <main id='main' className='bg-white w-full -pt-8'>
        <IndexIntroSection />
        <IndexServices />
        <IndexPortfolioSection portfolioItems={portfolio} />
        <IndexPricingSection />
        <IndexContributionsSection contributions={contributions} />
        <Footer />
      </main>
    </>
  )
}