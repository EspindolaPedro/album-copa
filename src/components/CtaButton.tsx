import type { ComponentProps } from 'react'

type CtaButtonProps = ComponentProps<'a'> & {
  icon: string
  variant?: 'primary' | 'secondary'
  iconClassName?: string
}

const variants = {
  primary:
    'bg-[rgba(255,237,0,1)] text-[rgba(1,20,58,1)] shadow-[0_18px_36px_rgba(255,237,0,0.35)]',
  secondary:
    'border border-[rgba(1,20,58,0.16)] bg-white/86 text-[rgba(1,20,58,0.92)] shadow-[0_14px_30px_rgba(1,20,58,0.08)] backdrop-blur',
}

function CtaButton({
  href = '/',
  icon,
  children,
  variant = 'primary',
  className = '',
  iconClassName = '',
  ...props
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-2xl px-6 text-sm font-semibold transition hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...props}
    >
      <img
        src={icon}
        alt=""
        aria-hidden="true"
        className={`h-4 w-4 object-contain ${iconClassName}`}
      />
      {children}
    </a>
  )
}

export default CtaButton
