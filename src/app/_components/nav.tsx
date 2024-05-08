import Link from 'next/link'
import { buttonVariants } from '@/src/app/_components/ui/button'
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from '@kinde-oss/kinde-auth-nextjs/server'
import { ArrowRight } from 'lucide-react'
// import UserAccountNav from './UserAccountNav'
import { twp, cn } from '@/src/server/utils'
// import MobileNav from './MobileNav'

const Nav = async () => {
  const { getUser } = getKindeServerSession()
  const user = getUser()

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/10 backdrop-blur-lg transition-all">
      <div className={cn("flex h-14 items-center justify-between border-b border-zinc-200", twp().wrapper)}>
        <Link
          href='/'
          className='flex z-40 font-semibold'>
          <span>podium.ai</span>
        </Link>

        {/* <MobileNav isAuth={!!user} /> */}

        <div className='hidden items-center space-x-4 sm:flex'>
          {!(await user) ? (
            <>
              <Link
                href='#pricing'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Pricing
              </Link>
              <Link
                href='/terms'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Terms of Service
              </Link>
              <Link
                href='/privacy'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Privacy Policy
              </Link>
              {/* <Link
                href='/faq'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                FAQ
              </Link> */}
              <Link
              href='https://testflight.apple.com/join/Gw2MNJoT'
                className={buttonVariants({
                  size: 'sm',
                  className: "bg-gradient-to-r from-green-400 to-green-300 ease-in-out duration-200 hover:text-black hover:shadow-xl",
                })}>
                Get started{' '}
                <ArrowRight className='ml-1.5 h-5 w-5' />
              </Link>
            </>
          ) : (
            <>
              <Link
                href='/dashboard'
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                })}>
                Dashboard
              </Link>

              {/* <UserAccountNav
                  name={
                    !user.given_name || !user.family_name
                      ? 'Your Account'
                      : `${user.given_name} ${user.family_name}`
                  }
                  email={user.email ?? ''}
                  imageUrl={user.picture ?? ''}
                /> */}
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
