import { useLayoutEffect, useRef } from 'react'
import CtaButton from './CtaButton'

function CollectionStartSection() {
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
        const titleSplit = SplitText.create('[data-fifth-title]', {
          type: 'words',
          wordsClass: 'fifth-title-word++',
        })
        const copySplit = SplitText.create('[data-fifth-copy]', {
          type: 'words',
          wordsClass: 'fifth-copy-word++',
        })

        const timeline = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        })

        timeline
          .from(
            titleSplit.words,
            {
              yPercent: 105,
              opacity: 0,
              rotate: 2,
              transformOrigin: 'left bottom',
              stagger: 0.04,
              duration: 0.72,
            },
            0,
          )
          .from(
            copySplit.words,
            {
              yPercent: 112,
              opacity: 0,
              stagger: 0.012,
              duration: 0.38,
            },
            0.3,
          )
          .from(
            '[data-fifth-actions]',
            {
              y: 18,
              opacity: 0,
              duration: 0.42,
            },
            0.46,
          )
          .from(
            '[data-fifth-viva]',
            {
              y: 18,
              opacity: 0,
              duration: 0.44,
            },
            0.62,
          )
          .from(
            '[data-fifth-footer]',
            {
              y: 36,
              opacity: 0,
              duration: 0.55,
            },
            0.58,
          )
      }, section)

      revertContext = () => ctx.revert()
    })()

    return () => revertContext?.()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-[rgba(254,246,224,1)] px-5 py-14 pb-24 text-[rgba(1,20,58,1)] sm:px-8 lg:flex lg:min-h-[112vh] lg:items-center lg:px-10 lg:py-14 lg:pb-26"
    >
      <img
        src="/quinta-section/bg.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute right-[-34%] bottom-[54px] z-0 w-[min(132vw,740px)] max-w-none object-contain sm:right-[-18%] sm:w-[min(102vw,840px)] lg:right-0 lg:bottom-[64px] lg:w-[min(48vw,760px)] xl:right-0 xl:w-[min(48vw,820px)]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1770px] items-center gap-10 lg:grid-cols-[minmax(0,620px)_1fr]">
        <div className="relative z-10 max-w-[610px]">
          <img
            src="/quarta-section/detalhes.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            className="pointer-events-none absolute left-[-22px] top-[-18px] z-0 h-[230px] w-auto opacity-100 sm:left-[-34px] sm:top-[-22px] sm:h-[292px] lg:left-[-54px] lg:top-1/2 lg:h-[360px] lg:-translate-y-1/2"
          />

          <div className="relative z-10">
            <h2
              data-fifth-title
              className="text-[3.1rem] leading-[0.9] font-extrabold uppercase text-[rgba(1,20,58,1)] sm:text-[4.35rem] lg:text-[4.8rem]"
            >
              <span className="block">Sua colecao</span>
              <span className="block">comeca</span>
              <span className="block">aqui.</span>
            </h2>

            <div data-fifth-copy className="mt-8 max-w-[48ch] text-[0.92rem] leading-6 font-medium text-[rgba(1,20,58,0.58)]">
              <p>
                Reviva cada estadio, selecao e momento historico da Copa do Mundo 2026
                atraves da colecao oficial Panini.
              </p>
              <p className="mt-3">
                Complete paginas, encontre figurinhas raras e transforme cada pacote em uma
                nova descoberta.
              </p>
            </div>

            <div data-fifth-actions className="relative z-20 mt-8 flex flex-col gap-3 sm:flex-row">
              <CtaButton
                icon="/cart.svg"
                iconClassName="[filter:brightness(0)_saturate(100%)_invert(11%)_sepia(53%)_saturate(1553%)_hue-rotate(196deg)_brightness(94%)_contrast(101%)]"
                className="h-12 rounded-[8px] px-6 text-[0.76rem] shadow-[0_12px_24px_rgba(255,209,55,0.24)]"
              >
                Comprar Agora
              </CtaButton>
              <CtaButton
                icon="/play.svg"
                variant="secondary"
                className="h-12 rounded-[8px] border-[rgba(1,20,58,0.34)] bg-[rgba(254,246,224,0.58)] px-6 text-[0.76rem] shadow-none backdrop-blur-sm"
              >
                Explorar Colecao
              </CtaButton>
            </div>

            <img
              data-fifth-viva
              src="/quinta-section/viva.png"
              alt="Viva essa paixao"
              loading="lazy"
              decoding="async"
              className="mt-10 w-[230px] object-contain sm:w-[270px] lg:ml-4"
            />
          </div>
        </div>
        <div className="min-h-[420px] lg:min-h-[680px]" aria-hidden="true" />
      </div>

      <img
        data-fifth-footer
        src="/quinta-section/footer.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[54px] w-full object-cover sm:h-[64px]"
      />
    </section>
  )
}

export default CollectionStartSection
