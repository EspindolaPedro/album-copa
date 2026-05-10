import { navItems } from '../data/home'
import CtaButton from './CtaButton'

function Header() {
  return (
    <header data-hero-header className="relative flex items-center justify-between gap-4 md:min-h-[72px]">
      <a href="/" aria-label="Panini Home" className="shrink-0">
        <img src="/logo-panini.png" alt="Panini" className="h-auto w-23 sm:w-25" />
      </a>

      <nav
        data-hero-nav
        className="hidden md:absolute md:left-32 md:flex md:items-center md:justify-center md:rounded-tl-[28px] md:rounded-br-[28px] md:bg-white/92 md:px-5.5 md:py-3.5 md:shadow-[0_18px_40px_rgba(186,198,210,0.36)] md:backdrop-blur-sm"
      >
        <ul className="flex items-center gap-1 text-[12px] font-medium text-[rgba(150,154,160,0.95)]">
          {navItems.map((item, index) => (
            <li key={item}>
              <a
                href="/"
                className={`inline-flex h-[30px] items-center justify-center rounded-tl-[14px] rounded-br-[14px] px-[15px] text-[11px] transition-colors ${
                  index === 0
                    ? 'bg-[rgba(255,237,0,1)] font-semibold text-[rgba(1,20,58,1)]'
                    : 'text-[rgba(150,154,160,0.95)] hover:bg-[rgba(255,237,0,1)] hover:font-semibold hover:text-[rgba(1,20,58,1)]'
                }`}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <CtaButton
        data-hero-mobile-cta
        icon="/cart.svg"
        className="h-12 px-5 shadow-[0_12px_24px_rgba(255,237,0,0.35)] md:hidden"
      >
        Comprar Agora
      </CtaButton>
    </header>
  )
}

export default Header
