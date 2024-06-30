import { render, screen } from '@testing-library/react';
import Home from '../Home';

import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// export const handlers = [
//   // Intercept "GET https://example.com/user" requests...
//   rest.get(
//     'http://localhost:8081/api/v1/products/getAllProduct',
//     (_req: Request, _res: Response, ctx) => {
//       // ...and respond to them using this JSON response.
//       return ctx.json({
//         json: {
//           id: '123',
//           name: 'Apples',
//           image:
//             'https://res.cloudinary.com/dyvisacbu/image/upload/v1/Product%20Images/myujv7ykzvvawrwbhntz',
//           image_public_id: 'Product Images/myujv7ykzvvawrwbhntz',
//           tag: '1Kg, Pricetag',
//           price: 50,
//           desc: 'Order Fresh from Dizon Farms, Fresh is Best Naturally',
//           inventory: 20,
//           category: 'Vegetable',
//           brand: 'Fruitas',
//           shippingFee: null,
//           freeShipping: true,
//           exclusive: false,
//           bestOffer: false,
//           averageRating: 0,
//           numberOfReviews: 0,
//           createdAt: '2024-05-15T05:10:17.323+00:00',
//           updatedAt: '2024-05-15T05:10:17.323+00:00',
//         },
//       });
//     }
//   ),
// ];

export const server = setupServer(
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
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('gets the data', async () => {
  const queryClient = new QueryClient();
  render(
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );

  const name = await screen.findByTestId('name');

  expect(name).toBeInTheDocument();
});
