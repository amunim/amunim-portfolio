import { IconBrandGithub, IconBrandLinkedin, IconCalendar, IconMail, IconMapPin } from '@tabler/icons-react'
import { CAL_URL } from '../NavMenu'

const contacts = [
    { label: 'amunim@amunim.me', href: 'mailto:amunim@amunim.me', Icon: IconMail },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-munim-x2002x/', Icon: IconBrandLinkedin },
    { label: 'GitHub', href: 'https://github.com/amunim', Icon: IconBrandGithub },
]

export default function IndexContactSection() {
    return (
        <section id="contact" aria-labelledby="contact-title" className="bg-zinc-950 py-20 text-white sm:py-28">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
                <div>
                    <h2 id="contact-title" className="text-3xl sm:text-4xl">Book a call</h2>
                    <p className="mt-4 max-w-md text-zinc-300">
                        Building a high-performance system, or want your current architecture reviewed? Pick a time for a 15-minute technical conversation.
                    </p>
                    <a
                        href={CAL_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-6 font-semibold text-zinc-900 transition-colors hover:bg-zinc-200 focus-visible:outline-white"
                    >
                        <IconCalendar className="size-5" aria-hidden />
                        Book a 15-minute call
                    </a>
                </div>
                <ul className="divide-y divide-white/10 border-y border-white/10">
                    {contacts.map(({ label, href, Icon }) => (
                        <li key={href}>
                            <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="flex items-center gap-4 py-4 font-medium transition-colors hover:text-zinc-300 focus-visible:outline-white">
                                <Icon className="size-5 text-zinc-400" aria-hidden />
                                {label}
                            </a>
                        </li>
                    ))}
                    <li className="flex items-center gap-4 py-4 text-zinc-300">
                        <IconMapPin className="size-5 text-zinc-400" aria-hidden />
                        Remote, based in Pakistan
                    </li>
                </ul>
            </div>
        </section>
    )
}
