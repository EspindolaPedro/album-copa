import { stats } from '../data/home'

function HeroContent() {
  return (
    <div className="max-w-[540px]">
      <div
        data-hero-badge
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-3 py-1.5 text-[0.66rem] font-semibold uppercase tracking-[0.04em] text-[rgba(1,20,58,0.76)] shadow-[0_10px_24px_rgba(1,20,58,0.08)] backdrop-blur sm:px-3 sm:py-1.5 sm:text-[0.7rem]"
      >
        <img src="/icon-worldcup.png" alt="" aria-hidden="true" className="h-4 w-4" />
        FIFA World Cup 2026
      </div>

      <h1
        data-hero-title
        className="mt-3 max-w-[9ch] text-[2.9rem] leading-[0.9] font-extrabold uppercase text-[rgba(1,20,58,1)] sm:mt-4 sm:text-[3.85rem] lg:text-[4.35rem] xl:text-[4.9rem]"
      >
        O maior torneio do mundo
      </h1>

      <p
        data-hero-copy
        className="mt-3 max-w-[400px] text-[0.92rem] leading-6 text-[rgba(1,20,58,0.62)] sm:mt-4 sm:text-[0.98rem] sm:leading-6"
      >
        Colecione histórias. Conecte países. Viva a emoção da Copa do Mundo 2026 com
        o álbum oficial de figurinhas Panini.
      </p>

      <div className="relative z-20 mt-4 flex flex-col gap-2 sm:mt-5 sm:flex-row">
        <a
          href="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-[rgba(255,237,0,1)] px-5 text-sm font-semibold text-[rgba(1,20,58,1)] shadow-[0_18px_36px_rgba(255,237,0,0.35)] transition hover:-translate-y-0.5 sm:h-13 sm:px-6"
        >
          <img
            src="/cart.svg"
            alt=""
            aria-hidden="true"
            className="h-4 w-4 object-contain [filter:brightness(0)_saturate(100%)_invert(11%)_sepia(53%)_saturate(1553%)_hue-rotate(196deg)_brightness(94%)_contrast(101%)]"
          />
          Comprar Agora
        </a>
        <a
          href="/"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-[rgba(1,20,58,0.16)] bg-white/86 px-5 text-sm font-semibold text-[rgba(1,20,58,0.92)] shadow-[0_14px_30px_rgba(1,20,58,0.08)] backdrop-blur transition hover:-translate-y-0.5 sm:h-13 sm:px-6"
        >
          <img src="/play.svg" alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
          Conheça o produto
        </a>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2 rounded-[24px] border border-white/80 bg-white/84 p-3 shadow-[0_22px_50px_rgba(1,20,58,0.08)] backdrop-blur sm:mt-6 sm:grid-cols-4 sm:gap-0 sm:p-3.5">
        {stats.map((stat, index) => (
          <div
            data-hero-stat
            key={stat.label}
            className={`flex min-h-[82px] flex-col items-center justify-center gap-1.5 rounded-2xl px-2 text-center sm:min-h-[92px] ${
              index < stats.length - 1 ? 'sm:border-r sm:border-[rgba(1,20,58,0.1)]' : ''
            }`}
          >
            <img src={stat.icon} alt="" aria-hidden="true" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
            <div className="text-[1.12rem] font-semibold leading-none text-[rgba(0,101,238,1)] sm:text-[1.25rem]">
              {stat.value}
            </div>
            <div className="text-[0.64rem] font-medium uppercase tracking-[0.05em] text-[rgba(1,20,58,0.76)] sm:text-[0.7rem]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div
        data-hero-license
        className="mt-3 inline-flex items-center gap-2 px-2 py-1 text-[0.68rem] font-medium text-[rgba(1,20,58,0.76)] sm:mt-4 sm:gap-2.5 sm:px-2.5 sm:py-1.5 sm:text-[0.74rem]"
      >
        <img src="/fifa.png" alt="" aria-hidden="true" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
        Licenciado oficialmente pela FIFA
      </div>
    </div>
  )
}

export default HeroContent
