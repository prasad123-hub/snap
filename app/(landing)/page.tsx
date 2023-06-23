import Image from "next/image"

import { siteConfig } from "@/config/site"
import { MotionA, MotionDiv } from "@/components/client"
import { CtaButtons } from "@/components/cta-buttons"
import PricingComponent from "@/components/pricing-component"

export default function IndexPage() {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-background">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width={100}
              height={100}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-800/20">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          />
        </svg>
        <div
          className="absolute left-[calc(50%-4rem)] top-10 -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:left-48 lg:top-[calc(50%-30rem)] xl:left-[calc(50%-24rem)]"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-green-600 opacity-20"
            style={{
              clipPath:
                "polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)",
            }}
          />
        </div>
        <div className="mx-auto flex max-w-7xl justify-center px-6 pb-24 pt-10 text-center sm:pb-32 lg:flex lg:px-8 lg:py-32">
          <section className="relative flex flex-col items-center justify-center gap-8 ">
            <div className="flex flex-col items-center gap-4 text-center">
              <MotionA
                href=""
                className="z-10 inline-flex gap-2 rounded-full bg-background px-4 py-2 text-sm text-[#95A8C6] transition hover:text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                25+ Themes | 70+ Languages
              </MotionA>
              <MotionDiv
                className="relative max-w-4xl"
                initial={{ opacity: 0, top: 20 }}
                animate={{ opacity: 1, top: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h1 className="bg-gradient-to-b from-gray-100 to-gray-500 bg-clip-text py-4 font-heading text-4xl font-semibold leading-[1.1] tracking-wide text-transparent md:text-5xl">
                  Generate beautiful and customizable images of your code
                  snippets.
                </h1>
              </MotionDiv>
              <MotionDiv
                className="relative mt-4 max-w-xl"
                initial={{ opacity: 0, top: 20 }}
                animate={{ opacity: 1, top: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                <p className="text-base text-[#7F92AF]">
                  {siteConfig.description}
                </p>
              </MotionDiv>
            </div>
            <MotionDiv
              className="relative mt-4 flex flex-col gap-4 md:flex-row"
              initial={{ opacity: 0, top: 20 }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
            >
              <CtaButtons />
            </MotionDiv>
          </section>
        </div>
      </div>
      {/* <div className="pb-12 md:pb-16 ">
        <SnapCodeArea />
      </div> */}
      <MotionDiv
        className="mx-auto mt-4 max-w-5xl px-4 py-12 sm:px-6 lg:px-8"
        initial={{ opacity: 0, top: 20 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/code_snippet.png"
          width={1200}
          height={600}
          className="rounded-lg object-cover "
          alt="Code Snippet"
        />
      </MotionDiv>

      <div className="py-12">
        <PricingComponent />
      </div>
    </section>
  )
}
