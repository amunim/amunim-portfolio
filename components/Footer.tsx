import useOnScreen from "@/hooks/useOnScreen";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
  token: string;
};

const RATE_LIMIT_KEY = 'email_rate_limit';
const MAX_EMAILS_PER_HOUR = 3;
const HOUR_IN_MS = 60 * 60 * 1000;

interface RateLimitData {
  count: number;
  firstAttempt: number;
}

const links = [
  { label: 'Email amunim@amunim.me', href: 'mailto:amunim@amunim.me' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-munim-x2002x/' },
  { label: 'GitHub', href: 'https://github.com/amunim' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~016f42c0501a199670' },
  { label: 'StackOverflow', href: 'https://stackoverflow.com/users/9138440/amunim' },
];

export default function Footer() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // the page's one dealt moment: the marker bar draws once, when the heading first scrolls into view
  const markRef = useRef<HTMLSpanElement>(null);
  const markSeen = useOnScreen(markRef);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => { if (markSeen) setDrawn(true); }, [markSeen]);

  useEffect(() => {
    const loadRecaptcha = () => {
      const script = document.createElement("script");
      script.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RE_SITE_KEY}`;
      script.async = true;
      document.head.appendChild(script);
    };

    loadRecaptcha();
  }, []);

  const checkRateLimit = useCallback((userEmail: string): { allowed: boolean; resetTime?: Date } => {
    const now = Date.now();
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    let rateLimits: Record<string, RateLimitData> = {};

    if (stored) {
      rateLimits = JSON.parse(stored);
      // Clean up old entries
      Object.keys(rateLimits).forEach(key => {
        if (now - rateLimits[key].firstAttempt > HOUR_IN_MS) {
          delete rateLimits[key];
        }
      });
    }

    const userLimit = rateLimits[userEmail];
    if (userLimit) {
      if (now - userLimit.firstAttempt > HOUR_IN_MS) {
        delete rateLimits[userEmail];
      } else if (userLimit.count >= MAX_EMAILS_PER_HOUR) {
        const resetTime = new Date(userLimit.firstAttempt + HOUR_IN_MS);
        return { allowed: false, resetTime };
      }
    }

    return { allowed: true };
  }, []);

  const updateRateLimit = useCallback((userEmail: string) => {
    const now = Date.now();
    const stored = localStorage.getItem(RATE_LIMIT_KEY);
    let rateLimits: Record<string, RateLimitData> = stored ? JSON.parse(stored) : {};

    if (rateLimits[userEmail]) {
      if (now - rateLimits[userEmail].firstAttempt > HOUR_IN_MS) {
        rateLimits[userEmail] = { count: 1, firstAttempt: now };
      } else {
        rateLimits[userEmail].count += 1;
      }
    } else {
      rateLimits[userEmail] = { count: 1, firstAttempt: now };
    }

    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(rateLimits));
  }, []);

  async function onSubmit(data: FormData) {
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    if (!data.email) {
      setError('Email is required');
      setIsLoading(false);
      return;
    }

    const rateLimit = checkRateLimit(data.email);
    if (!rateLimit.allowed) {
      setError(`Too many emails. Please try again after ${rateLimit.resetTime?.toLocaleTimeString()}`);
      setIsLoading(false);
      return;
    }

    try {
      const token = await (window as any).grecaptcha.execute(process.env.NEXT_PUBLIC_RE_SITE_KEY, { action: "submit" });
      const response = await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ ...data, token }),
        headers: {
          'Content-Type': "application/json"
        }
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Failed to send email');
        return;
      }

      updateRateLimit(data.email);
      setSuccess('Your message is in. I will reply by email.');
      reset();
    } catch (err) {
      setError('Failed to send message. Please try again or email amunim@amunim.me.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer id='contact'>
      <section className='contact section' aria-labelledby='contact-title'>
        <div className='wrap contact__grid'>
          <div className='contact__copy'>
            <h2 id='contact-title' className='contact__title'>
              Contact me about your <span ref={markRef} className='mark' data-drawn={drawn}>project</span>
            </h2>
            <p className='section__intro'>Say what the system should do, who will use it and when you need it.</p>
            <ul className='contact__links'>
              {links.map(l => (
                <li key={l.href}><a className='link' href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <form className='contact__form' onSubmit={handleSubmit(onSubmit)} noValidate>
            <label className='field'>
              <span>Name</span>
              <input
                autoComplete='name'
                aria-invalid={!!errors.name}
                {...register("name", { required: 'Write your name' })} />
              {errors.name && <p className='field__error'>{errors.name.message}</p>}
            </label>
            <label className='field'>
              <span>Email</span>
              <input
                type='email'
                autoComplete='email'
                aria-invalid={!!errors.email}
                {...register("email", { required: 'Write the email I should reply to', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Write an email like name@example.com' } })} />
              {errors.email && <p className='field__error'>{errors.email.message}</p>}
            </label>
            <label className='field'>
              <span>Message</span>
              <textarea
                rows={5}
                aria-invalid={!!errors.message}
                {...register('message', { required: 'Write what you need built' })} />
              {errors.message && <p className='field__error'>{errors.message.message}</p>}
            </label>
            <div role='status' aria-live='polite'>
              {error && <p className='form-status' data-kind='error'>{error}</p>}
              {success && <p className='form-status' data-kind='ok'>{success}</p>}
            </div>
            <button type='submit' className='btn btn-primary' disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </section>

      <div className='site-footer'>
        <div className='wrap'>
          <p className='site-footer__name' aria-hidden='true'>Abdul Munim</p>
          <div className='site-footer__meta'>
            <span>&copy; {new Date().getFullYear()} Abdul Munim</span>
            <a href='#main' className='link'>Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
