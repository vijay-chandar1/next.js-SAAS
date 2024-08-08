export const PLANS = [
  {
    name: 'Free',
    slug: 'free',
    quota: 10,
    pagesPerPdf: 5,
    price: {
      amount: 0,
      priceIds: {
        test: '',
        production: '',
      },
    },
  },
  {
    name: 'Pro',
    slug: 'pro',
    quota: 50,
    pagesPerPdf: 200,
    price: {
      amount: 14.99,
      priceIds: {
        test: 'price_1NuEwTA19umTXGu8MeS3hN8L',
        production: '',
      },
    },
  },
  {
    name: 'Premium',
    slug: 'premium',
    quota: 100,
    pagesPerPdf: 500,
    price: {
      amount: 29.99,
      priceIds: {
        test: 'price_1NuEwTA19umTXGu8MeS3hN8LA',
        production: '',
      },
    },
  },
]
