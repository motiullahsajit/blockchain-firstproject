import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'awu53lvs',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skaHEfLcx2xlSBM945gzdBnLgIub7DxEf7411B6O4nlxTQPVBZX12tkMTPlbySqrI5sHZqNbhWPej4Mgffx53cefZCZOMe0Dq9uN89dkXvxRKg2BxBSw6PjvJtvbOcv5g0ssgYWfMYxD7EalVoDoEuPGRkqHB99qCjwBITclu9fTyEV4MADa',
  useCdn: false,
})