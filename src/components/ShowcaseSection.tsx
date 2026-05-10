import { useLayoutEffect, useRef } from 'react'

const stickers = [
  '/figurinhas-tras/1.png',
  '/figurinhas-tras/2.png',
  '/figurinhas-tras/3.png',
  '/figurinhas-tras/4.png',
  '/figurinhas-tras/5.png',
]

const finalFrames = [
  { x: 0, y: 0, rotate: 0, scale: 0.95, zIndex: 3 },
  { x: -168, y: 14, rotate: -3, scale: 0.83, zIndex: 1 },
  { x: 132, y: -128, rotate: 40, scale: 0.90, zIndex: 5 },
  { x: 164, y: 108, rotate: 49, scale: 0.84, zIndex: 2 },
  { x: 72, y: 28, rotate: 20, scale: 0.82, zIndex: 4 },
]

const startFrames = [
  { x: 760, y: 0, rotate: 0, scale: 1.02 },
  { x: 748, y: 12, rotate: 0, scale: 1 },
  { x: 772, y: -14, rotate: 0, scale: 1.01 },
  { x: 738, y: 22, rotate: 0, scale: 0.99 },
  { x: 782, y: 8, rotate: 0, scale: 1 },
]

function ShowcaseSection() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    let revertContext: (() => void) | undefined

    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    void (async () => {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ])

      gsap.registerPlugin(ScrollTrigger)

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-sticker-card]')

        cards.forEach((card, index) => {
          const finalFrame = finalFrames[index]
          gsap.set(card, {
            x: finalFrame.x,
            y: finalFrame.y,
            rotate: finalFrame.rotate,
            scale: finalFrame.scale,
            opacity: 1,
            zIndex: finalFrame.zIndex,
          })
        })

        const timeline = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
          scrollTrigger: {
            trigger: section,
            start: 'top center',
            toggleActions: 'play none none reverse',
          },
          delay: 0.5,
        })

        timeline.fromTo(
          cards,
          {
            x: (_index) => startFrames[_index].x,
            y: (_index) => startFrames[_index].y,
            rotate: (_index) => startFrames[_index].rotate,
            scale: (_index) => startFrames[_index].scale,
            opacity: 0.78,
          },
          {
            x: (_index) => finalFrames[_index].x,
            y: (_index) => finalFrames[_index].y,
            rotate: (_index) => finalFrames[_index].rotate,
            scale: (_index) => finalFrames[_index].scale,
            opacity: 1,
            duration: 2,
            stagger: 0.09,
          },
        )
      }, section)

      revertContext = () => ctx.revert()
    })()

    return () => revertContext?.()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 min-h-screen overflow-hidden bg-[rgba(1,20,58,1)] bg-top bg-no-repeat px-5 pt-44 pb-16 sm:px-8 sm:pt-52 lg:px-10 lg:pt-60"
      style={{
        backgroundImage: "url('/second-bg.jpg')",
        backgroundSize: '100% auto',
      }}
    >
      <div className="pointer-events-none absolute inset-x-0  bottom-0 h-[180px] bg-[linear-gradient(180deg,rgba(254,246,224,0)_0%,rgba(254,246,224,1)_100%)]" />

      <div className="mx-auto flex min-h-[72vh] w-full max-w-[1770px] items-center">
        <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[520px]">
          <div className="absolute left-[8%] top-1/2 h-[340px] w-[242px] -translate-y-1/2 sm:h-[430px] sm:w-[306px] lg:h-[540px] lg:w-[384px]">
            {stickers.map((sticker) => (
              <img
                key={sticker}
                data-sticker-card
                src={sticker}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                className="absolute left-0 top-0 h-full w-full object-contain drop-shadow-[0_24px_32px_rgba(15,25,49,0.28)]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
