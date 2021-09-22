import { rest } from 'msw';

export const appComponentHandlers = [rest.get('http://localhost:3030/dummyUrl', (_, res, ctx) => res(ctx.json({ message: 'Learn React!' })))];
