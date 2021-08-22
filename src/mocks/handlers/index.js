import { rest } from 'msw';
import { plants } from 'mocks/data/plants';

export const handlers = [
  rest.get('/plants', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        plants,
      })
    );
  }),
];
