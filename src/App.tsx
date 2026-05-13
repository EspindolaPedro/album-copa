import { useLayoutEffect, useRef } from 'react'
import CollectionStartSection from './components/CollectionStartSection'
import FeatureAside from './components/FeatureAside'
import FeatureCards from './components/FeatureCards'
import Header from './components/Header'
import HeroContent from './components/HeroContent'
import PaymentBadge from './components/PaymentBadge'
import PlayersSection from './components/PlayersSection'
import PremiumCollectionSection from './components/PremiumCollectionSection'
import RibbonMarquee from './components/RibbonMarquee'
import ShowcaseSection from './components/ShowcaseSection'

function App() {
  const heroRef = useRef<HTMLElement | null>(null)

  useLayoutEffect(() => {
    const hero = heroRef.current
    let revertContext: (() => void) | undefined

    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    void (async () => {
      const [{ gsap }, { SplitText }] = await Promise.all([
        import('gsap'),
        import('gsap/SplitText'),
      ])

      gsap.registerPlugin(SplitText)

      const ctx = gsap.context(() => {
        const titleSplit = SplitText.create('[data-hero-title]', {
          type: 'words',
          wordsClass: 'hero-title-word++',
        })

        const copySplit = SplitText.create('[data-hero-copy]', {
          type: 'words',
          wordsClass: 'hero-copy-word++',
        })

        const timeline = gsap.timeline({
          defaults: {
            ease: 'power3.out',
          },
        })

        timeline
          .from(
            '[data-hero-header]',
            {
              y: -28,
              opacity: 0,
              duration: 0.75,
            },
            0.12,
          )
          .from(
            '[data-hero-nav]',
            {
              y: -14,
              opacity: 0,
              duration: 0.55,
            },
            0.3,
          )
          .from(
            '[data-hero-badge]',
            {
              y: 26,
              opacity: 0,
              duration: 0.58,
            },
            0.44,
          )
          .from(
            titleSplit.words,
            {
              yPercent: 105,
              opacity: 0,
              rotate: 2,
              transformOrigin: 'left bottom',
              stagger: 0.045,
              duration: 0.78,
            },
            0.72,
          )
          .from(
            copySplit.words,
            {
              yPercent: 115,
              opacity: 0,
              stagger: 0.012,
              duration: 0.42,
            },
            1.08,
          )
          .from(
            '[data-hero-stat]',
            {
              y: 26,
              opacity: 0,
              stagger: 0.08,
              duration: 0.48,
            },
            1.34,
          )
          .from(
            '[data-hero-license]',
            {
              y: 18,
              opacity: 0,
              duration: 0.45,
            },
            1.68,
          )
          .from(
            '[data-hero-feature-panel]',
            {
              x: 42,
              opacity: 0,
              duration: 0.7,
            },
            0.86,
          )
          .from(
            '[data-hero-feature-aside]',
            {
              x: 18,
              opacity: 0,
              stagger: 0.09,
              duration: 0.4,
            },
            1.12,
          )
          .from(
            '[data-hero-payment]',
            {
              x: 36,
              opacity: 0,
              duration: 0.62,
            },
            1.46,
          )
          .from(
            '[data-hero-feature-mobile]',
            {
              y: 20,
              opacity: 0,
              stagger: 0.1,
              duration: 0.45,
            },
            1.2,
          )

        gsap.to('[data-hero-float="slow"]', {
          y: -10,
          duration: 3.4,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: 1.2,
        })

        gsap.to('[data-hero-float="fast"]', {
          y: -8,
          duration: 2.8,
          ease: 'sine.inOut',
          repeat: -1,
          yoyo: true,
          delay: 1.35,
        })
      }, hero)

      revertContext = () => ctx.revert()
    })()

    return () => revertContext?.()
  }, [])

  return (
    <main className="min-h-screen bg-[rgba(254,246,224,1)] text-[rgba(1,20,58,1)]">
      <section
        ref={heroRef}
        className="relative z-10 h-screen w-full overflow-hidden bg-[rgba(254,246,224,1)] bg-cover bg-position-[center_right] bg-no-repeat px-4 py-3 sm:px-5 sm:py-4 lg:px-7 lg:py-4"
        style={{
          backgroundImage: "url('/bg-hero.jpg')",
        }}
      >
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1770px] flex-col">
          <Header />

          <div className="grid min-h-0 flex-1 items-center gap-4 pb-2 pt-3 lg:grid-cols-[minmax(0,540px)_1fr] lg:gap-5 lg:pb-4 lg:pt-4">
            <HeroContent />
            <div className="hidden lg:block" />
          </div>

          <FeatureCards />

          <FeatureAside />
          <PaymentBadge />
        </div>
      </section>

      <div className="relative">
        <RibbonMarquee />
        <ShowcaseSection />
      </div>

      <PlayersSection />
      <PremiumCollectionSection />
      <CollectionStartSection />
    </main>
  )
}

export default App
