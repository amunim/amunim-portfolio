import styles from "@/styles/Home.module.css";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Engine, RecursivePartial, IOptions } from 'tsparticles-engine'

export default function IndexIntroSection() {
    const particlesInit = useCallback(async (engine: Engine) =>
    await loadFull(engine), []);

  const particleOptions: RecursivePartial<IOptions> =
  {
    fullScreen: false,
    particles:
    {
      number:
      {
        value: 20,

        density:
        {
          enable: true,

          value_area: 400
        }
      },
      color: { value: "#FFFFFF" },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: { nb_sides: 5 }
      },
      opacity: {
        value: 0.25,
        random: true,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 29,
        random: true,
        anim: {
          enable: false,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: false,
        distance: 300,
        color: "#FFFFFF",
        opacity: 0,
        width: 0
      },
      move: {
        enable: true,
        speed: 0.5,
        direction: "top",
        straight: true,
        out_mode: "out",
        bounce: false,
        random: true,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onHover: {
          enable: false,
          mode: "repulse"
        },
        onClick: {
          enable: false,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 800,
          line_linked: { opacity: 1 }
        },
        bubble: {
          distance: 790,
          size: 79,
          duration: 2,
          opacity: 0.8,
          speed: 3
        },
        repulse: {
          distance: 400,
          duration: 0.4
        },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 }
      }
    },
    retina_detect: true
  };

  const particlesLoaded = useCallback(async (container: any) =>
    console.log(container), []);
    
    return (
        <section id={styles.intro} className="text-white lg:mb-12">
          <Particles
            id="tsParticles"
            init={particlesInit}
            loaded={particlesLoaded}
            className="w-[100vw] h-[100vh] absolute"
            options={particleOptions} />
          <div id={styles.intro_inner}>
            <div id={styles.intro_divider}>
              <div className='text-center pt-24 pb-20 md:px-7 mx-auto'>
                <div className='flex'>
                  <div className='mx-auto w-2/3 basis-2/3 md:px-7 fade-in'>
                    <h1 className='uppercase font-bold md:text-4xl text-xl'>
                      <span className='overflow-visible whitespace-nowrap'>| Software Engineer |</span>
                      <br />
                      <span className='text-yellow-300 flex flex-col'><span className='overflow-visible whitespace-nowrap'>Full Stack</span> <span className='overflow-visible whitespace-nowrap' >Web Developer</span></span>
                    </h1>
                    <p className='mx-auto max-w-md text-base'>
                      Building enterprise software solutions, a team player, preferring TDD over faster MVP, big fan of typed languages such as typescript or C#, but choosing the right tools for the job rather than the job for already learnt skills. Mostly experienced as a full-stack web developer.<br /> Nowawdays working on freelance projects and managing a team on side project.
                    </p>
                    <a href="#portfolio" className={`btn ${styles["secondary-button"]} z-[10000] relative`}>Get Started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
}