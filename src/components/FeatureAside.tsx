import { features } from '../data/home'

function FeatureAside() {
  return (
    <aside
      data-hero-feature-panel
      data-hero-float="slow"
      className="absolute right-6 top-[160px] z-10 hidden w-[210px] rounded-[28px] border border-white/18 bg-[linear-gradient(180deg,rgba(1,20,58,0.42),rgba(1,20,58,0.18))] px-4 py-5 text-white shadow-[0_24px_60px_rgba(1,20,58,0.22)] backdrop-blur-xl lg:block xl:right-8 xl:top-[175px]"
    >
      <div className="space-y-5">
        {features.map((feature, index) => (
          <div
            data-hero-feature-aside
            key={feature.label}
            className={`flex items-center gap-3 pb-5 ${
              index < features.length - 1 ? 'border-b border-white/10' : 'pb-0'
            }`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/22 bg-white/8">
              <img src={feature.icon} alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
            </span>
            <span className="text-[0.82rem] font-medium uppercase leading-5 tracking-[0.03em] text-white/92">
              {feature.label}
            </span>
          </div>
        ))}
      </div>
    </aside>
  )
}

export default FeatureAside
