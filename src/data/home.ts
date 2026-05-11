export const navItems = ['Início', 'Produto', 'copa', 'Suporte', 'figurinho']

export const stats = [
  { icon: '/trophy.png', value: '48', label: 'Seleções' },
  { icon: '/soccer.png', value: '104', label: 'Partidas' },
  { icon: '/stadium.png', value: '16', label: 'Sedes' },
  { icon: '/figurinhas.png', value: '+1000', label: 'Figurinhas' },
]

export const features = [
  { icon: '/diamond.svg', label: 'Qualidade premium' },
  { icon: '/trucl.svg', label: 'Envio para todo o Brasil' },
  { icon: '/security.png', label: 'Produto oficial' },
  { icon: '/lock.svg', label: 'Compra segura' },
]

export const paymentMethods = [
  { src: '/cartoes/pay.png', alt: 'Apple Pay' },
  { src: '/cartoes/pix.png', alt: 'Pix' },
  { src: '/cartoes/mastercard.png', alt: 'Mastercard' },
  { src: '/cartoes/amex.png', alt: 'Amex' },
  { src: '/cartoes/visa.png', alt: 'Visa' },
]

export const playerBenefits = [
  {
    icon: '/figurinha-jogadores/icones/gem.svg',
    title: 'Qualidade premium',
    description: 'Impresso de alta qualidade e acabamento impecável em cada figurinha.',
  },
  {
    icon: '/figurinha-jogadores/icones/truck.svg',
    title: 'Envio para todo o Brasil',
    description: 'Ambiente protegido e diversos meios de pagamento para sua tranquilidade.',
  },
  {
    icon: '/figurinha-jogadores/icones/shield.svg',
    title: 'Produto oficial',
    description: 'Licenciado pela FIFA, com toda a qualidade e autenticidade Panini.',
  },
  {
    icon: '/figurinha-jogadores/icones/lock.svg',
    title: 'Compra segura',
    description: 'Ambiente protegido e diversos meios de pagamento para sua tranquilidade.',
  },
]

export type Stat = (typeof stats)[number]
export type Feature = (typeof features)[number]
export type PaymentMethod = (typeof paymentMethods)[number]
export type PlayerBenefit = (typeof playerBenefits)[number]
