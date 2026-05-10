import { features } from '../data/home'

function FeatureCards() {
  return (
    <div className="mt-auto grid gap-3 lg:hidden">
      {features.map((feature) => (
        <div
          data-hero-feature-mobile
          key={feature.label}
          className="flex items-center gap-4 rounded-[22px] border border-white/28 bg-[linear-gradient(180deg,rgba(1,20,58,0.4),rgba(1,20,58,0.2))] px-4 py-4 text-white shadow-[0_18px_30px_rgba(1,20,58,0.16)] backdrop-blur-xl"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/24 bg-white/8">
            <img src={feature.icon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
          </span>
          <span className="text-sm font-medium uppercase tracking-[0.03em]">{feature.label}</span>
        </div>
      ))}
    </div>
  )
}

export default FeatureCards
