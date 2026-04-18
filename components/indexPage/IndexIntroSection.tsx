import styles from "@/styles/Home.module.css";
export default function IndexIntroSection() {
  return (
    <section id={styles.intro} className="h-[600px] px-32 bg-[radial-gradient(circle_at_center_bottom,_#9fb3c1_0%,_#EEEEEE_80%)] py-[60px] text-center">
      <div className='flex pt-20 justify-center h-full'>
        <div className='fade-in'>
          <h1 className='uppercase font-normal md:text-6xl text-xl'>
            <span className='overflow-visible whitespace-nowrap'>| Software Engineer |</span>
          </h1>
          <p className='mx-auto font-light text-2xl whitespace-nowrap text-center'>
            <span>Full-Stack Engineer. End-to-end ownership.</span><br />
            <span>Building SaaS products that perform at scale.</span>
          </p>
        </div>
      </div>
    </section>
  );
}