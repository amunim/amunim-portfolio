import useOnScreen from "@/hooks/useOnScreen";
import { useRef, useState } from "react";
import Tooltip from "../Tooltip";

export default function IndexPricingSection() {
    const expirienceRef = useRef(null);
    const [tooltipVisiblity, setTooltipVisiblity] = useState(false);
    const [tooltipText, setTooltipText] = useState("");
    const isExpirienceDivVisible = useOnScreen(expirienceRef);

    function EnableTooltip(text: string) {
        setTooltipText(text);
        setTooltipVisiblity(true);
    }

    return (
        <section id="pricing" className='bg-primary py-20'>
            <Tooltip text={tooltipText} visiblity={tooltipVisiblity} />
            <h2 className='text-base uppercase spacing tracking-widest text-white text-center mb-20'>experiences</h2>
            <div className='container mx-auto pt-6 px-8'>
                <div className='text-center text-xl grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:px-20'>
                    <div className='mx-auto'>
                        <div className={`experience-box relative opacity-100 lg:opacity-25 lg:translate-x-9 lg:translate-y-[5%] ${(isExpirienceDivVisible ? "lg:!translate-y-[0%] lg:!opacity-100" : "")}`}>
                            <h3 className='uppercase text-2xl relative z-30 text-[#777]'>Hobby</h3>
                            <ul className='feature-list'>
                                <li onMouseOver={() => EnableTooltip("The application had voice call capabilities with RSA and ECHA encrytion, opus was used to encode the packets")} onMouseOut={() => setTooltipVisiblity(false)} className="cursor-pointer">Meeting application like Zoom(when COVID hit)</li>
                                <li><a href='https://amunim.itch.io/robos-jailbreak'>Honourable Mention in N3rkMind gamejam</a></li>
                                <li><a href='https://izanamiworkshop.itch.io/chick-n-die'>Particapted in Ludam Dare</a></li>
                                <li><a href='https://www.upwork.com/freelancers/~016f42c0501a199670?p=1377856912245268480'>Pluralsight 251 Expert Score C# Assessment</a></li>
                            </ul>
                            {/* <div>
                    <a href='#portfolio' className='btn btn-sm mt-4 btn-gray hover:bg-black hover:text-white '>Request quote</a>
                  </div> */}
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <div className={`experience-box relative opacity-100 lg:opacity-25  before:bg-[#7205f7] after:bg-[#5826a082] lg:translate-y-[15%] ${(isExpirienceDivVisible ? "lg:!translate-y-[5%] lg:!opacity-100" : "")}`}>
                            <h3 className='uppercase text-2xl relative z-30 text-white'><a className='underline underline-offset-2 decoration-dotted hover:decoration-wavy hover:text-gray-600' href='https://www.upwork.com/freelancers/~016f42c0501a199670'>Upwork</a></h3>
                            <ul className='feature-list'>
                                <li>More than 17 jobs</li>
                                <li>Top Rated Freelancer with 100% Job Success Score(yet)</li>
                                <li>Working since late 2021</li>
                                <li>Referral tracker system on discord server</li>
                                <li>Restaurant Client System</li>
                                <li><a href='https://mentorflight-production.up.railway.app/route'>Mentor Flight</a></li>
                                <li><a href='https://flagsmith.com/blog/net-feature-flag/'>.Net Feature Flags article on Flagsmith</a></li>
                                <li>Integration of stream trading API and referral system on a project</li>
                                <li>Gift Card Balance Checker of Wallmart, Home Depot and Bed, Bath and Beyond</li>
                                <li>Application to monitor keywords from RSS flux and paste by simulating mouse and keyboard</li>
                            </ul>
                            {/* <div>
                    <a href='#portfolio' className='btn btn-sm mt-4 btn-primary'>Request quote</a>
                  </div> */}
                        </div>
                    </div>
                    <div className='mx-auto'>
                        <div ref={expirienceRef} className={`experience-box relative before:bg-[#ffcd00] opacity-100 lg:opacity-25 after:bg-[#e4ba34] lg:translate-y-[25%] ${(isExpirienceDivVisible ? "lg:!translate-y-[10%] lg:!opacity-100" : "")}`}>
                            <h3 className='uppercase text-2xl relative z-30 text-white'>Magical Digits</h3>
                            <ul className='feature-list'>
                                <li>Worked for almost an year</li>
                                <li><a target='_blank' href='https://crystalcabins.com/'>Lead Back-end dev on migrating classic ASP rentals site to ASP.Net/Next.js</a></li>
                                <li>Later promoted to lead Full-Stack developer on the project</li>
                                <li>Added multiple stores feature to a standalone POS invoicing application(opticofy),</li>
                                <li>Opticofy is the sole optics POS, reporting and invoicing solution in the metropolis</li>
                                <li>Created accounting application to manage payments and generate reports</li>
                                <li>The application's aim is to make reporting easier like crystal reports and help organisations to manage their various accounts</li>
                                <li>Created a flutter application to time prayer</li>
                                <li><a target='_blank' href='https://stackoverflow.com/users/9138440/amunim'>Acheived ~1000 score on StackOverflow</a></li>
                                <li>Had <a target='_blank' href='https://stackoverflow.com/users/87015/salman-a'>Salman Arshad</a> as my senior among others</li>
                                <li><a target='_blank' href='https://www.linkedin.com/in/abdul-munim-x2002x/'>Reviews on linked in speaks for themselves...</a></li>
                            </ul>
                            {/* <div>
                    <a href='#portfolio' className='btn btn-sm mt-4 !text-[#FFF] border-[#ffcb05] bg-[#ffcb05]'>Request quote</a>
                  </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}