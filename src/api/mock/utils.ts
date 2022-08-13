import server from "./server";

export const setUpServer = (fns: (() => void)[]) => {
  beforeAll(() => server.listen());
  afterEach(() => {
    if (fns) fns.forEach((fn) => fn());
    server.resetHandlers();
  });
  afterAll(() => server.close());
};
