# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Two equal audiences. Freelance buyers (small and mid-size business owners, mostly found through Upwork) deciding whether to hire a developer for a business system. Hiring managers and recruiters scanning for a senior full-stack / .NET engineer. Both arrive from a link, skim the first screen, and look for proof of shipped work before contacting.

## Product Purpose
Personal portfolio of Abdul Munim, a freelance software engineer (full-stack web, .NET, TypeScript). The page exists to turn a skim into a message: show real shipped systems, say plainly what he builds, and make contact easy. Success is a visitor sending an email or filling in the contact form.

## Positioning
He builds business systems (booking and rentals, accounting and vouchers, point of sale, store integrations) test-first and typed, and has shipped them to real clients. A designer-developer template portfolio could not claim that body of work.

## Operating Context
Freelance work through Upwork since late 2021; previously lead developer at Magical Digits; currently managing a small team on a side project. Stack: C# / .NET, TypeScript, Next.js, React, Flutter. Practices: TDD (xUnit, Jest, Puppeteer, Storybook), DDD, SQL and NoSQL design.

## Capabilities and Constraints
- Next.js 13 (pages router), React 18, Tailwind 3, TypeScript. Portfolio and contribution data are served from `services/*.ts` via `getServerSideProps`.
- Contact form posts to `/api/email` (nodemailer) with a reCAPTCHA token (`NEXT_PUBLIC_RE_SITE_KEY`) and a client-side rate limit. The form was commented out in the old footer; it is being restored.
- Tawk.to live chat widget is embedded and stays.
- Some private projects (Simple Accounting, Opticofy) have no public link.

## Brand Commitments
Name: Abdul Munim; domain amunim.me. The previous purple/yellow/slate palette is explicitly dropped; the redesign replaces it. Visual direction pinned by the owner: light, warm, print-like.

## Evidence on Hand
Real project demos in `public/portfolio/` (goldener.gif, opticofy.gif, accounting.mp4/gif; Zid Sheets video is hosted at zidsheets.amunim.me). Real links: LinkedIn, GitHub (amunim), Upwork, StackOverflow, email amunim@amunim.me. Open-source contributions to MediatR, AntDesign rc-rate, Custom Electron Prompt, and a Flagsmith blog article. No client testimonials or logos are provided: none may be invented.

## Product Principles
1. Shipped work first; every claim has a project or a link behind it.
2. Plain words for a non-technical buyer, precise terms for a technical one.
3. One main action everywhere: contact.
4. Nothing invented: no testimonials, client names, numbers or awards beyond what the owner already published.
