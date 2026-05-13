import { useLayoutEffect, useRef } from 'react'
import { playerBenefits } from '../data/home'
import CtaButton from './CtaButton'

const playerCards = [
  { src: '/figurinha-jogadores/messi.png', alt: 'Figurinha Lionel Messi' },
  { src: '/figurinha-jogadores/neymar.png', alt: 'Figurinha Neymar Jr' },
  { src: '/figurinha-jogadores/kyllian.png', alt: 'Figurinha Kylian Mbappe' },
]

const fanFrames = [
  { x: -170, y: 18, rotate: -13, scale: 0.96, zIndex: 2 },
  { x: 0, y: -10, rotate: 0, scale: 1.12, zIndex: 4 },
  { x: 182, y: 20, rotate: 14, scale: 0.96, zIndex: 1 },
]

function PlayersSection() {
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
        const cards = gsap.utils.toArray<HTMLElement>('[data-player-card]')
        const titleSplit = SplitText.create('[data-player-title]', {
          type: 'words',
          wordsClass: 'player-title-word++',
        })
        const descriptionSplit = SplitText.create('[data-player-description]', {
          type: 'words',
          wordsClass: 'player-description-word++',
        })

        cards.forEach((card, index) => {
          gsap.set(card, {
            x: 0,
            y: index * 6,
            rotate: 0,
            scale: 1,
            opacity: 1,
            zIndex: 3 - index,
          })
        })

        const timeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: section,
            start: 'top 72%',
            toggleActions: 'play none none reverse',
          },
        })

        timeline
          .from(
            '[data-player-badge]',
            {
              y: 18,
              opacity: 0,
              duration: 0.42,
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
              stagger: 0.032,
              duration: 0.62,
            },
            0.12,
          )
          .from(
            descriptionSplit.words,
            {
              yPercent: 112,
              opacity: 0,
              stagger: 0.012,
              duration: 0.34,
            },
            0.38,
          )
          .from(
            '[data-player-button]',
            {
              y: 18,
              opacity: 0,
              duration: 0.4,
            },
            0.52,
          )
          .to(
            cards,
            {
              x: (index) => fanFrames[index].x,
              y: (index) => fanFrames[index].y,
              rotate: (index) => fanFrames[index].rotate,
              scale: (index) => fanFrames[index].scale,
              zIndex: (index) => fanFrames[index].zIndex,
              stagger: 0.08,
              duration: 0.9,
            },
            0.14,
          )

        gsap.from('[data-player-benefit]', {
          y: 28,
          opacity: 0,
          stagger: 0.09,
          duration: 0.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '[data-player-benefits-grid]',
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        })
      }, section)

      revertContext = () => ctx.revert()
    })()

    return () => revertContext?.()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="bg-[rgba(250,243,221,1)] px-5 py-12 sm:px-8 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1770px]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,620px)_1fr] lg:gap-6">
          <div className="max-w-[580px]">
            <div
              data-player-badge
              className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.04em] text-[rgba(16,70,162,1)] shadow-[0_8px_18px_rgba(1,20,58,0.06)]"
            >
              <img src="/icon-worldcup.png" alt="" aria-hidden="true" className="h-3.5 w-3.5 object-contain" />
              FIFA World Cup 2026
            </div>

            <h2
              data-player-title
              className="mt-4 max-w-[15ch] text-[3.4rem] leading-[0.92] font-extrabold uppercase text-[rgba(8,34,92,1)] sm:text-[4.6rem]"
            >
              Colecione histórias viva paixões
            </h2>

            <p
              data-player-description
              className="mt-8 max-w-[420px] text-[0.98rem] leading-6 font-medium text-[rgba(0,0,0,0.56)]"
            >
              As figurinhas Panini da Copa do Mundo 2026 celebram os momentos, os craques e
              as emoções que unem milhões de fãs pelo planeta. Monte seu álbum, complete sua
              coleção e faça parte dessa história.
            </p>

            <div data-player-button className="mt-8">
              <CtaButton
                icon="/cart.svg"
                iconClassName="[filter:brightness(0)_saturate(100%)_invert(11%)_sepia(53%)_saturate(1553%)_hue-rotate(196deg)_brightness(94%)_contrast(101%)]"
                className="h-11 w-fit rounded-[10px] px-5 text-[0.78rem] shadow-[0_10px_22px_rgba(255,209,55,0.28)]"
              >
                Comprar Agora
              </CtaButton>
            </div>
          </div>

          <div className="relative h-[360px] sm:h-[460px] lg:h-[580px]">
            <div className="absolute left-1/2 top-1/2 h-[250px] w-[175px] -translate-x-1/2 -translate-y-1/2 sm:h-[330px] sm:w-[231px] lg:h-[420px] lg:w-[294px]">
              {playerCards.map((card) => (
                <img
                  key={card.src}
                  data-player-card
                  src={card.src}
                  alt={card.alt}
                  loading="lazy"
                  decoding="async"
                  className="absolute left-0 top-0 h-full w-full object-contain drop-shadow-[0_28px_40px_rgba(16,24,55,0.24)]"
                />
              ))}
            </div>
          </div>
        </div>

        <div data-player-benefits-grid className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-4">
          {playerBenefits.map((benefit) => (
            <div
              key={benefit.title}
              data-player-benefit
              className="rounded-[18px] bg-[rgba(191,184,167,0.88)] px-5 py-5 text-white shadow-[0_16px_28px_rgba(75,64,42,0.12)] backdrop-blur-sm sm:px-6 sm:py-6"
            >
              <div className="flex items-center gap-3">
                <img src={benefit.icon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
                <h3 className="text-[1.08rem] font-semibold uppercase">{benefit.title}</h3>
              </div>
              <div className="mt-4 h-px w-[108px] bg-white/35" />
              <p className="mt-4 max-w-[24ch] text-[0.9rem] leading-6 text-white/84">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PlayersSection
