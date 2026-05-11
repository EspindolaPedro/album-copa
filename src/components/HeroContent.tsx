import { stats } from '../data/home'

function HeroContent() {
  return (
    <div className="max-w-[560px]">
      <div
        data-hero-badge
        className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-3 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.04em] text-[rgba(1,20,58,0.76)] shadow-[0_10px_24px_rgba(1,20,58,0.08)] backdrop-blur"
      >
        <img src="/icon-worldcup.png" alt="" aria-hidden="true" className="h-4 w-4" />
        FIFA World Cup 2026
      </div>

      <h1
        data-hero-title
        className="mt-6 max-w-[10ch] text-[7.4rem] leading-[0.88] font-extrabold uppercase text-[rgba(1,20,58,1)] sm:text-[4.6rem] xl:text-[5.9rem]"
      >
        O maior torneio do mundo
      </h1>

      <p
        data-hero-copy
        className="mt-6 max-w-[420px] text-[1rem] leading-7 text-[rgba(1,20,58,0.62)] sm:text-[1.06rem]"
      >
        Colecione histórias. Conecte países. Viva a emoção da Copa do Mundo 2026 com
        o álbum oficial de figurinhas Panini.
      </p>

      <div className="relative z-20 mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="/"
          className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-[rgba(255,237,0,1)] px-6 text-sm font-semibold text-[rgba(1,20,58,1)] shadow-[0_18px_36px_rgba(255,237,0,0.35)] transition hover:-translate-y-0.5"
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
          className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-[rgba(1,20,58,0.16)] bg-white/86 px-6 text-sm font-semibold text-[rgba(1,20,58,0.92)] shadow-[0_14px_30px_rgba(1,20,58,0.08)] backdrop-blur transition hover:-translate-y-0.5"
        >
          <img src="/play.svg" alt="" aria-hidden="true" className="h-4 w-4 object-contain" />
          Conheça o produto
        </a>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-3 rounded-[28px] border border-white/80 bg-white/84 p-4 shadow-[0_22px_50px_rgba(1,20,58,0.08)] backdrop-blur sm:grid-cols-4 sm:gap-0 sm:p-5">
        {stats.map((stat, index) => (
          <div
            data-hero-stat
            key={stat.label}
            className={`flex min-h-[120px] flex-col items-center justify-center gap-3 rounded-2xl px-3 text-center sm:min-h-[112px] ${
              index < stats.length - 1 ? 'sm:border-r sm:border-[rgba(1,20,58,0.1)]' : ''
            }`}
          >
            <img src={stat.icon} alt="" aria-hidden="true" className="h-9 w-9 object-contain" />
            <div className="text-[1.45rem] font-semibold leading-none text-[rgba(0,101,238,1)]">
              {stat.value}
            </div>
            <div className="text-[0.82rem] font-medium uppercase tracking-[0.05em] text-[rgba(1,20,58,0.76)]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div
        data-hero-license
        className="mt-6 inline-flex items-center gap-3 px-3 py-2 text-[0.78rem] font-medium text-[rgba(1,20,58,0.76)]"
      >
        <img src="/fifa.png" alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
        Licenciado oficialmente pela FIFA
      </div>
    </div>
  )
}

export default HeroContent
