import { useLayoutEffect, useRef } from 'react'

const stickers = [
  '/figurinhas-tras/1.png',
  '/figurinhas-tras/2.png',
  '/figurinhas-tras/3.png',
  '/figurinhas-tras/4.png',
  '/figurinhas-tras/5.png',
]

const spreadFrames = [
  { x: 0, y: 0, rotate: 0, scale: 0.96, zIndex: 3 },
  { x: -148, y: 22, rotate: -12, scale: 0.82, zIndex: 1 },
  { x: 128, y: -116, rotate: 18, scale: 0.88, zIndex: 5 },
  { x: 176, y: 94, rotate: 28, scale: 0.82, zIndex: 2 },
  { x: 54, y: 46, rotate: 10, scale: 0.84, zIndex: 4 },
]

const clusterFrames = [
  { x: 0, y: 0, rotate: 0, scale: 0.9 },
  { x: -12, y: 8, rotate: -4, scale: 0.9 },
  { x: 10, y: -10, rotate: 4, scale: 0.9 },
  { x: 14, y: 12, rotate: 6, scale: 0.9 },
  { x: 4, y: 2, rotate: 2, scale: 0.9 },
]

const showcasePoints = [
  'Album oficial com acabamento premium.',
  'Pacotes que revelam craques, selecoes e momentos da Copa.',
  'Colecao feita para abrir, trocar e guardar.',
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
      const [{ gsap }, { ScrollTrigger }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('gsap/SplitText'),
      ])

      gsap.registerPlugin(ScrollTrigger, SplitText)

      const ctx = gsap.context(() => {
        const cards = gsap.utils.toArray<HTMLElement>('[data-sticker-card]')
        const pointCards = gsap.utils.toArray<HTMLElement>('[data-showcase-point]')
        const titleSplit = SplitText.create('[data-showcase-title]', {
          type: 'words',
          wordsClass: 'showcase-title-word++',
        })
        const paragraphSplit = SplitText.create('[data-showcase-paragraph]', {
          type: 'words',
          wordsClass: 'showcase-copy-word++',
        })
        const pointSplits = SplitText.create('[data-showcase-point-text]', {
          type: 'words',
          wordsClass: 'showcase-point-word++',
        })

        cards.forEach((card, index) => {
          const spreadFrame = spreadFrames[index]
          gsap.set(card, {
            x: spreadFrame.x,
            y: spreadFrame.y,
            rotate: spreadFrame.rotate,
            scale: spreadFrame.scale,
            opacity: 1,
            zIndex: spreadFrame.zIndex,
          })
        })

        const timeline = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
          scrollTrigger: {
            trigger: section,
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        })

        timeline
          .from(
            '[data-showcase-badge]',
            {
              y: 18,
              opacity: 0,
              duration: 0.48,
            },
            0,
          )
          .from(
            titleSplit.words,
            {
              yPercent: 105,
              opacity: 0,
              rotate: 2,
              transformOrigin: 'left bottom',
              stagger: 0.04,
              duration: 0.68,
            },
            0.14,
          )
          .from(
            paragraphSplit.words,
            {
              yPercent: 110,
              opacity: 0,
              stagger: 0.012,
              duration: 0.38,
            },
            0.36,
          )
          .from(
            pointCards,
            {
              y: 20,
              opacity: 0,
              stagger: 0.08,
              duration: 0.42,
            },
            0.5,
          )
          .from(
            pointSplits.words,
            {
              yPercent: 112,
              opacity: 0,
              stagger: 0.01,
              duration: 0.34,
            },
            0.6,
          )
          .fromTo(
            cards,
            {
              x: (_index) => clusterFrames[_index].x,
              y: (_index) => clusterFrames[_index].y,
              rotate: (_index) => clusterFrames[_index].rotate,
              scale: (_index) => clusterFrames[_index].scale,
              opacity: 0.7,
            },
            {
              x: (_index) => spreadFrames[_index].x,
              y: (_index) => spreadFrames[_index].y,
              rotate: (_index) => spreadFrames[_index].rotate,
              scale: (_index) => spreadFrames[_index].scale,
              opacity: 1,
              duration: 1.8,
              stagger: 0.08,
            },
            0.16,
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
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[180px] bg-[linear-gradient(180deg,rgba(254,246,224,0)_0%,rgba(254,246,224,1)_100%)]" />

      <div className="mx-auto grid min-h-[72vh] w-full max-w-[1770px] items-center gap-14 lg:grid-cols-[1fr_minmax(0,430px)] lg:gap-10">
        <div className="relative order-2 z-10 max-w-[430px] lg:order-1">
          <div className="absolute left-1/2 top-1/2 h-[340px] w-[242px] -translate-x-1/2 -translate-y-1/2 sm:h-[430px] sm:w-[306px] lg:h-[540px] lg:w-[384px]">
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

        <div className="relative order-1 z-10 max-w-[430px] lg:order-2 lg:justify-self-end">
          <div
            data-showcase-badge
            className="inline-flex items-center rounded-full border border-[rgba(255,237,0,1)] bg-[rgba(255,237,0,1)] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[rgba(1,20,58,1)] shadow-[0_12px_24px_rgba(255,237,0,0.22)]"
          >
            Album oficial Panini
          </div>

          <h2
            data-showcase-title
            className="mt-6 max-w-[10ch] text-[2.9rem] leading-[0.92] font-extrabold uppercase text-[rgba(1,20,58,1)] sm:text-[3.6rem] lg:text-[4.4rem]"
          >
            Figurinhas que abrem a Copa
          </h2>

          <p
            data-showcase-paragraph
            className="mt-5 max-w-[38ch] text-[1rem] leading-7 text-[rgba(0,0,0,1)] sm:text-[1.05rem]"
          >
            Cada pacote junta selecoes, estadios, simbolos e jogadores em uma colecao
            pensada para abrir, trocar e revisitar durante todo o torneio.
          </p>

          <div className="mt-8 grid gap-3">
            {showcasePoints.map((point) => (
              <div
                data-showcase-point
                key={point}
                className="flex items-center gap-3 rounded-[22px] border border-white/12 bg-white/8 px-4 py-3 text-sm text-[rgba(0,0,0,1)] backdrop-blur-sm"
              >
                <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[rgba(255,237,0,1)]" />
                <span data-showcase-point-text>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowcaseSection
