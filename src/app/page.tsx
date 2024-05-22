import Link from "next/link";
import { cn } from "@/src/server/utils";
import { twp } from "@/src/server/utils";
import { Icons } from "@/src/app/_components/icons";
import { buttonVariants } from "@/src/app/_components/ui/button";
import { Pricing } from "@/src/app/_components/pricing";
import Image from "next/image"

export default function Home() {
  return (
    <main className={cn("mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center", twp().wrapper)}>
      <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-green-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-green-300 hover:bg-green/50'>
        <Link href="https://www.producthunt.com/products/podiumai" className="text-sm font-semibold text-gray-700 flex flex-row ">
          <Icons.party className="h-5 w-5 mr-2" /> PodiumAI is launched on ProductHunt!
        </Link>
      </div>

      {/* Hero Section */}
      <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text:7xl">
        AI Generated Learning Material from Lecture Recordings in Seconds!
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
         PodiumAI empowers students and educators to create educational material such as quizzes, notes, and summaries from lecture recordings.
      </p>
      <Link href="https://testflight.apple.com/join/Gw2MNJoT" className={buttonVariants({ size: "lg", className: "mt-4 bg-gradient-to-r from-green-400 to-teal-300 ease-in-out duration-200 hover:text-black hover:shadow-xl" })}>
        Get Started <Icons.arrowRight className="ml-2 h-5 w-5" />
      </Link>

      {/* Example Section */}
      <div className="mx-auto w-full max-w-screen-xl px-2.5 ">
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu orveflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-teal-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Image
                    priority={true}
                    src='/preview3.png'
                    alt='product preview'
                    width={1364}
                    height={866}
                    quality={100}
                    className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-teal-500 to-blue-300 opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div>

      <section className="text-left">
        <div className="relative items-center w-full px-5 pt-24 mx-auto md:px-12 lg:px-16 max-w-7xl lg:py-24 ">
          <div className="max-w-xl py-12 mx-auto lg:max-w-7xl ">
            <div>
              <div className="grid grid-cols-2 gap-12 lg:grid-cols-4 lg:space-y-0 lg:text-center">
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl lg:mx-auto">
                      <Icons.brain className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      AI Quiz Generation
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Create, practice, and see the results of quizzes generated from lecture recordings and track your progress
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-blue-100 rounded-xl lg:mx-auto">
                      <Icons.album className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                     Generate Notes and Flashcards
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Auto-generated notes and flashcards based on class objectives
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-teal-100 rounded-xl lg:mx-auto">
                      <Icons.blocks className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                      Track Student Progress
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Analyze the performance of students and track their progress
                  </div>
                </div>
                <div>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl lg:mx-auto">
                      <Icons.zap className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-lg font-medium leading-6 text-black">
                     Fast & Quick Generation
                    </p>
                  </div>
                  <div className="mt-4 text-base text-gray-700">
                    Generate learning material in seconds from hour-long lecture recordings
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden text-left">
        <div className="items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
          <div className="grid items-start grid-cols-1 lg:grid-cols-2">
            <div className="lg:pr-24 md:pr-12">
              <h2 className="mt-6 text-3xl font-medium text-black">
                A smart way to track student progress and weaknesses
              </h2>
              <p className="mt-5 text-base text-gray-700">
                PodiumAI uses advanced AI algorithms to generate quizzes, notes, and flashcards from lecture recordings. It also tracks student progress and weaknesses to help them improve their learning experience.
              </p>
              <ul className="grid grid-cols-2 gap-4 mt-12 list-none lg:gap-6" role="list">
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-green-100 rounded-xl">
                      <Icons.link className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                      Seamless Integration
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    You are able to connect with students and teachers through classcodes
                  </div>
                </li>
                <li>
                  <div>
                    <div className="flex items-center justify-center w-12 h-12 text-black bg-purple-100 rounded-xl">
                      <Icons.boxes className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-medium leading-6 text-black">
                    Adjust course material to student needs
                    </p>
                  </div>
                  <div className="mt-2 text-base text-gray-700">
                    PodiumAI adjusts the generation based on class and topic objectives
                  </div>
                </li>
              </ul>
            </div>
            <div className="h-full lg:mt-0 border-mercury-400 lg:border-l lg:pl-12">
              <div>
                <div className=' flow-root sm:mt-24'>
                  <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                    <Image
                      src='/preview4.png'
                      alt='product preview'
                      width={1364}
                      height={866}
                      quality={100}
                      className='rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div id="pricing">
        <div className='relative isolate'>
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu orveflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-green-400 opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

          <div>
            <div className='mx-auto max-w-6xl px-6 lg:px-8'>
              <div className='mt-16 flow-root sm:mt-24'>
                <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
                  <Pricing />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
            />
          </div>
        </div>
      </div> */}
    </main >
  );
}
