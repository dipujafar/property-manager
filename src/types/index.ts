export type TService = {
    icon: string;
    title: string;
    description: string;
}


export interface Feature {
  name: string
  included: boolean
}
export type TPricing = {
  title: string
  description: string
  price: number
  period: string
  features: Feature[]
  highlighted?: boolean
}