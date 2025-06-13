import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Facebook, Instagram } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/ui/text-effect";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { HeroHeader } from "./header";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 isolate hidden opacity-65 contain-strict lg:block"
        >
          <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>
        <section>
          <div className="relative pt-6 md:pt-5">
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      delayChildren: 1,
                    },
                  },
                },
                item: {
                  hidden: {
                    opacity: 0,
                    y: 20,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring",
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            >
              <Image
                src=""
                alt="background"
                className="absolute inset-x-0 top-56 -z-20 hidden lg:top-32 dark:block"
                width="3276"
                height="4095"
              />
            </AnimatedGroup>
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center items-center justify-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Image
                    className="mx-auto"
                    src="./images/logo.png"
                    alt="logo"
                    width={450}
                    height={450}
                  />
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-2 text-[#00ffe6] font-bold text-balance text-6xl md:text-7xl lg:mt-4 xl:text-[5.25rem]"
                >
                  Nosso novo site está em construção!
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-white text-balance text-lg"
                >
                  Nossos 23 anos de qualidade e excelência agora de modo mais
                  rápido, prático e tecnológico!
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                    <TextEffect
                      per="line"
                      preset="fade-in-blur"
                      speedSegment={0.3}
                      delay={0.5}
                      as="p"
                      className="mx-auto mt-2 max-w-2xl text-white text-balance text-lg"
                    >
                      Nos acompanhe nas redes sociais!
                    </TextEffect>
                  <div
                    key={1}
                    className="bg-[#003b6f] rounded-[calc(var(--radius-xl)+0.125rem)] border p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      variant="ghost"
                      className="h-10.5 !rounded-xl px-5 py-2 text-[#00ffe6]"
                    >
                      <Link href="http://api.whatsapp.com/send?1=pt_BR&phone=5581996995295" target="_blank">                        
                        <FaWhatsapp/>
                        <span className="text-nowrap">WhatsApp</span>
                      </Link>
                    </Button>
                    <Button
                      key={2}
                      asChild
                      size="lg"
                      variant="ghost"
                      className="h-10.5 rounded-xl px-5 py-2 text-[#00ffe6]"
                    >
                      <Link href="https://www.instagram.com/eduautopartss/" target="_blank">
                        <Instagram/><span className="text-nowrap">Instagram</span>
                      </Link>
                    </Button>
                    <Button
                      key={3}
                      asChild
                      size="lg"
                      variant="ghost"
                      className="h-10.5 rounded-xl px-5 py-2 mt-2 text-[#00ffe6]"
                    >
                      <Link href="https://www.facebook.com/edusom.autoparts/" target="_blank">
                        <Facebook/><span className="text-nowrap">Facebook</span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-background to-background absolute inset-0 z-10 from-transparent from-35%  items-center justify-center mx-auto"
                />
                <div className=" dark: bg-[#003b6f] justify-center items-center relative mx-auto max-w-6xl overflow-hidden rounded-2xl p-4">
                  <Image
                    className="mx-autoaspect-15/8 relative hidden rounded-2xl dark:block"
                    src="./images/eduzinho.png"
                    alt="app screen"
                    width="675"
                    height="360"
                  />
                  <Image
                    className="z-2 mx-auto aspect-15/8 relative rounded-2xl dark:hidden"
                    src="./images/eduzinho.png"
                    alt="app screen"
                    width="675"
                    height="360"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
