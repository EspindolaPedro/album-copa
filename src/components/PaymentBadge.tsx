import { paymentMethods } from '../data/home'

function PaymentBadge() {
  return (
    <div
      data-hero-payment
      data-hero-float="fast"
      className="absolute right-4 bottom-6 z-10 hidden rounded-[18px] border border-white/20 bg-[rgba(63,39,114,0.52)] px-3 py-2.5 text-white shadow-[0_18px_30px_rgba(1,20,58,0.2)] backdrop-blur-xl lg:flex lg:flex-col lg:items-end lg:gap-2.5 xl:right-6 xl:bottom-8"
    >
      <div className="shrink-0 whitespace-nowrap text-right">
        <div className="text-[0.68rem] font-medium uppercase tracking-[0.04em] text-white/72">
        Pagamento 100% seguro
          
        </div>
      </div>
      <div className="flex items-center gap-2">
        {paymentMethods.map((method) => (
          <span
            key={method.alt}
            className="inline-flex h-7 items-center justify-center rounded-full bg-white px-2.5"
          >
            <img src={method.src} alt={method.alt} className="h-4 w-auto object-contain" />
          </span>
        ))}
      </div>
    </div>
  )
}

export default PaymentBadge
