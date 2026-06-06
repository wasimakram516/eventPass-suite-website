export const metadata = {
  title: 'Pricing',
  description:
    'Transparent pricing for EventPass software plans and hardware rentals. Choose from Starter (99 OMR), Pro (299 OMR), or Tailored packages — plus kiosk, display, and self-service hardware for your event.',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing | EventPass',
    description:
      'EventPass software plans from 99 OMR/event, plus hardware rentals — kiosks, digital displays, self-service machines, and more.',
    url: '/pricing',
  },
};

export default function PricingLayout({ children }) {
  return children;
}
