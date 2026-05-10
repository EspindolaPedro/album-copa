import { useLayoutEffect, useRef } from 'react'

function RibbonMarquee() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    let revertContext: (() => void) | undefined

    if (!section || !track || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    void (async () => {
      const { gsap } = await import('gsap')

      const ctx = gsap.context(() => {
        gsap.set(track, { xPercent: 0 })

        const tween = gsap.to(track, {
          xPercent: -25,
          duration: 16,
          ease: 'none',
          repeat: -1,
        })

        return () => {
          tween.kill()
        }
      }, section)

      revertContext = () => ctx.revert()
    })()

    return () => revertContext?.()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="pointer-events-none absolute inset-x-0 top-5 z-30 -translate-y-1/2 overflow-hidden"
    >
      <div ref={trackRef} className="flex w-max">
        {[0, 1, 2, 3].map((item) => (
          <img
            key={item}
            src="/faixa.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="block h-[76px] w-auto max-w-none shrink-0 sm:h-[88px] lg:h-[96px]"
          />
        ))}
      </div>
    </section>
  )
}

export default RibbonMarquee
