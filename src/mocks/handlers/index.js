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
  rest.get('/plants/:id', (req, res, ctx) => {
    const plant = plants.filter((plant) => plant.id === req.params.id);
    return res(
      ctx.status(200),
      ctx.json({
        plants: plant,
      })
    );
  }),
];
