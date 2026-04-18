import Image from "next/image";

export default function IndexResumeHighlightSection() {
    return (
        <section id="resume-highlight" className="h-[600px] px-32 relative bg-[radial-gradient(circle_at_center_top,_#9fb3c1_0%,_#EEEEEE_80%)]">
            <div className="w-full h-96 flex justify-center items-center">
                {/* <Image alt="resume highlight" width={800} height={1000}
                    className='z-10'
                    src="/services/resume-highlight.svg" /> */}
            </div>
        </section>
    );
}