import { features } from '../data/home'

function FeatureCards() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2 lg:hidden">
      {features.map((feature) => (
        <div
          data-hero-feature-mobile
          key={feature.label}
          className="flex items-center gap-3 rounded-[20px] border border-white/28 bg-[linear-gradient(180deg,rgba(1,20,58,0.4),rgba(1,20,58,0.2))] px-3 py-3 text-white shadow-[0_18px_30px_rgba(1,20,58,0.16)] backdrop-blur-xl sm:px-4 sm:py-4"
        >
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/8 sm:h-12 sm:w-12">
            <img src={feature.icon} alt="" aria-hidden="true" className="h-5 w-5 object-contain sm:h-6 sm:w-6" />
          </span>
          <span className="text-[0.7rem] font-medium uppercase leading-4 tracking-[0.03em] sm:text-[0.76rem]">
            {feature.label}
          </span>
        </div>
      ))}
    </div>
  )
}

export default FeatureCards
