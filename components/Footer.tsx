import { sendEmail } from "@/utils/send-email";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Footer() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    sendEmail(data);
  }
  return (
    <footer id='contact'>
      <div className='lg:w-[35rem] md:w-[25rem] sm:w-[21rem] w-[15rem] mx-auto mt-3 pb-12'>
        <div className='text-center text-9xl'>
          <h1>Get in touch</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <input type="submit" className='btn btn-primary' />
          </div>
        </form>
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
  )
}