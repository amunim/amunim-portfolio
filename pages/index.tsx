import Head from "next/head";
import NavMenu from "@/components/NavMenu";
import Footer from "@/components/Footer";
import IndexHeroSection from "@/components/indexPage/IndexHeroSection";
import IndexMetricsSection from "@/components/indexPage/IndexMetricsSection";
import IndexCapabilitiesSection from "@/components/indexPage/IndexCapabilitiesSection";
import IndexEcosystemSection from "@/components/indexPage/IndexEcosystemSection";
import IndexInterfaceSection from "@/components/indexPage/IndexInterfaceSection";
import IndexCaseStudiesSection from "@/components/indexPage/IndexCaseStudiesSection";
import IndexContactSection from "@/components/indexPage/IndexContactSection";
import TawkIntegration from "@/components/TawkIntegration";

export default function Home() {
  return (
    <>
      <Head>
        <title>amunim.me | Software Engineering</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <NavMenu />
      <TawkIntegration />
      <main className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 mt-6">
        <IndexHeroSection />
        <IndexMetricsSection />
        <IndexCapabilitiesSection />
        <IndexEcosystemSection />
        {/* <IndexInterfaceSection /> */}
        <IndexCaseStudiesSection />
        <IndexContactSection />
      </main>

      <Footer />
    </>
  );
}
