import { useLayoutEffect, useRef } from 'react'

const experienceCards = [
  {
    icon: '/quarta-section/stadium.png',
    label: 'Estadios\nOficiais',
    accent: 'rgba(0,84,205,1)',
  },
  {
    icon: '/quarta-section/worlds-icon.png',
    label: '3 paises-\nsede',
    accent: 'rgba(28,177,86,1)',
  },
  {
    icon: '/quarta-section/box-icons.png',
    label: 'Album\npremium',
    accent: 'rgba(255,78,75,1)',
  },
  {
    icon: '/quarta-section/star-icons.png',
    label: 'Edicoes\nespeciais',
    accent: 'rgba(179,85,215,1)',
  },
]

function PremiumCollectionSection() {
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
        const cards = gsap.utils.toArray<HTMLElement>('[data-fourth-card]')
        const titleSplit = SplitText.create('[data-fourth-title]', {
          type: 'words',
          wordsClass: 'fourth-title-word++',
        })
        const copySplit = SplitText.create('[data-fourth-copy]', {
          type: 'words',
          wordsClass: 'fourth-copy-word++',
        })

        const timeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: section,
            start: 'top 68%',
            toggleActions: 'play none none reverse',
          },
        })

        timeline
          .from(
            '[data-fourth-book]',
            {
              x: -76,
              y: 22,
              rotate: -4,
              opacity: 0,
              duration: 0.9,
            },
            0,
          )
          .from(
            '[data-fourth-badge]',
            {
              y: 18,
              opacity: 0,
              duration: 0.42,
            },
            0.1,
          )
          .from(
            titleSplit.words,
            {
              yPercent: 105,
              opacity: 0,
              rotate: 2,
              transformOrigin: 'left bottom',
              stagger: 0.035,
              duration: 0.66,
            },
            0.24,
          )
          .from(
            copySplit.words,
            {
              yPercent: 112,
              opacity: 0,
              stagger: 0.012,
              duration: 0.36,
            },
            0.48,
          )
          .from(
            cards,
            {
              y: 26,
              opacity: 0,
              stagger: 0.08,
              duration: 0.46,
            },
            0.64,
          )
          .from(
            '[data-fourth-detail]',
            {
              opacity: 0,
              scale: 0.96,
              duration: 0.5,
            },
            0.18,
          )

        gsap.to('[data-fourth-float]', {
          y: -8,
          duration: 3.1,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: 1,
        })
      }, section)

      revertContext = () => ctx.revert()
    })()

    return () => revertContext?.()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[rgba(254,246,224,1)] px-5 py-12 text-[rgba(1,20,58,1)] sm:px-7 lg:flex lg:min-h-[500px] lg:items-center lg:px-8 lg:py-10"
    >
      <img
        src="/quarta-section/bolas-coloridas.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute -left-24 bottom-0 h-[190px] w-auto sm:-left-20 sm:h-[245px] lg:-left-4 lg:h-[295px]"
      />
      <img
        data-fourth-detail
        src="/quarta-section/detalhes.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute right-0 top-1/2 hidden h-[246px] w-auto -translate-y-1/2 lg:block"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1580px] items-center gap-8 lg:grid-cols-[650px_minmax(0,860px)] lg:gap-14">
        <div
          data-fourth-float
          className="order-2 flex min-h-[270px] items-center justify-center lg:order-1 lg:min-h-0 lg:justify-start"
        >
          <img
            data-fourth-book
            src="/quarta-section/book.png"
            alt="Album oficial aberto com estadios e figurinhas especiais"
            loading="lazy"
            decoding="async"
            className="w-[min(108vw,660px)] max-w-none object-contain drop-shadow-[0_18px_26px_rgba(1,20,58,0.14)] sm:w-[min(88vw,700px)] lg:w-[650px] xl:w-[700px]"
          />
        </div>

        <div className="order-1 w-full max-w-[860px] justify-self-center lg:order-2 lg:justify-self-start">
          <div
            data-fourth-badge
            className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.54rem] font-bold uppercase tracking-[0.08em] text-[rgba(38,92,168,1)] shadow-[0_7px_16px_rgba(1,20,58,0.07)]"
          >
            <img src="/quarta-section/mini-star.png" alt="" aria-hidden="true" className="h-2.5 w-2.5 object-contain" />
            Experiencia oficial
          </div>

          <h2
            data-fourth-title
            className="mt-5 max-w-[16ch] text-[2.45rem] leading-[0.86] font-extrabold uppercase text-[rgba(1,20,58,1)] sm:text-[3.15rem] lg:text-[3.25rem]"
          >
            Muito alem das figurinhas.
          </h2>

          <p
            data-fourth-copy
            className="mt-5 max-w-[39ch] text-[0.82rem] leading-5 font-medium text-[rgba(1,20,58,0.58)] sm:text-[0.88rem]"
          >
            Cada pagina guarda momentos historicos, estadios lendarios e selecoes que
            marcarao a Copa do Mundo de 2026.
          </p>

          <p className="mt-2 max-w-[39ch] text-[0.82rem] leading-5 font-medium text-[rgba(1,20,58,0.58)] sm:text-[0.88rem]">
            Colecione partidas, cidades e memorias em uma experiencia criada para fas do
            mundo inteiro.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-[repeat(4,195px)]">
            {experienceCards.map((card) => (
              <div
                key={card.label}
                data-fourth-card
                className="relative flex min-h-[96px] flex-col items-center justify-center overflow-hidden rounded-[12px] bg-white px-2.5 py-3 text-center shadow-[0_12px_22px_rgba(1,20,58,0.08)] sm:min-h-[104px] lg:h-[210px] lg:w-[180px]"
              >
                <div
                  className="absolute inset-x-0 bottom-0 h-[3px]"
                  style={{ backgroundColor: card.accent }}
                />
                <img src={card.icon} alt="" aria-hidden="true" className="h-8 w-8 object-contain lg:h-14 lg:w-14" />
                <div className="mt-3 whitespace-pre-line text-[0.76rem] font-semibold leading-4 text-[rgba(0,0,0,0.92)] lg:mt-6 lg:text-[1.08rem] lg:leading-6">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PremiumCollectionSection
