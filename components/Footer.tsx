import { sendEmail } from "@/utils/send-email";
import { useCallback, useEffect, useState } from "react";
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

export default function Footer() {
  const { register, handleSubmit, reset, watch } = useForm<FormData>();
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const email = watch('email');

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
      setSuccess('Message sent successfully!');
      reset();
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <footer id='contact'>
      <div className='lg:w-[35rem] md:w-[25rem] sm:w-[21rem] w-[15rem] mx-auto mt-3 pb-12'>
        <div className='text-center text-9xl'>
          <h1>Get in touch</h1>
        </div>
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        {success && <div className="text-green-500 mb-4 text-center">{success}</div>}
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset>
            <div className='mb-6'>
              <div className='uppercase text-[#9c9c9c] mb-2'>
                <label>Email</label>
              </div>
              <input
                type="email"
                className='border rounded px-1 w-full py-2'
                {...register("email", { required: true })} />
            </div>
          </fieldset>
          <fieldset>
            <div className='mb-6'>
              <div className='uppercase text-[#9c9c9c] mb-2'>
                <label>Name</label>
              </div>
              <input
                className='border rounded px-1 w-full py-2'
                {...register("name", { required: true })} />
            </div>
          </fieldset>
          <fieldset className='pb-6'>
            <div className='uppercase text-[#9c9c9c] mb-2'>
              <label>Message</label>
            </div>
            <textarea
              className='w-full border rounded px-1'
              aria-multiline="true"
              rows={5}
              {...register('message', { required: true })}>
            </textarea>
          </fieldset>
          <div className='text-center'>
            <button
              type="submit"
              className='btn btn-primary disabled:opacity-50 disabled:cursor-not-allowed'
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form> */}
      </div>
      <div className='mb-32'>
        <ul className='flex flex-col md:flex-row justify-center align-middle footer-navbar text-[#9c9c9c]'>
          <li>
            <a href='https://www.linkedin.com/in/abdul-munim-x2002x/'>LinkedIn</a>
          </li>
          <li>
            <a href='mailto:amunim@amunim.me'>Email</a>
          </li>
          <li>
            <a href='https://github.com/amunim'>GitHub</a>
          </li>
          <li>
            <a href='https://www.upwork.com/freelancers/~016f42c0501a199670'>Upwork</a>
          </li>
          <li>
            <a href='https://stackoverflow.com/users/9138440/amunim'>StackOverflow</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}