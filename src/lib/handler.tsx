import { QueryClient } from '@tanstack/react-query';
import { render } from '@testing-library/react';
import { rest } from 'msw';

export const handlers = [
  rest.get(
    'http://localhost:8081/api/v1/products/getAllProduct',
    (_req, res, ctx) => {
      // ...and respond to them using this JSON response.
      return res(
        ctx.json({
          content: [
            {
              id: '123',
              name: 'Apples',
              image:
                'https://res.cloudinary.com/dyvisacbu/image/upload/v1/Product%20Images/myujv7ykzvvawrwbhntz',
              image_public_id: 'Product Images/myujv7ykzvvawrwbhntz',
              tag: '1Kg, Pricetag',
              price: 50,
              desc: 'Order Fresh from Dizon Farms, Fresh is Best Naturally',
              inventory: 20,
              category: 'Vegetable',
              brand: 'Fruitas',
              shippingFee: null,
              freeShipping: true,
              exclusive: false,
              bestOffer: false,
              averageRating: 0,
              numberOfReviews: 0,
              createdAt: '2024-05-15T05:10:17.323+00:00',
              updatedAt: '2024-05-15T05:10:17.323+00:00',
            },
          ],
        })
      );
    }
  ),
];

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
    // logger: {
    //     log: console.log,
    //     warn: console.warn,
    //     error: () => {},
    // }
  });
