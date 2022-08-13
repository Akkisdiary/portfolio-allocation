import { cleanup } from '@testing-library/react';

import { Endpoints, Url } from './endpoints';

afterEach(cleanup);

describe("Url()", () => {
  it("should add query params to url", () => {
    const url = Url("/path", { key1: "value1" });
    expect(url).toBe("http://test.com/path?key1=value1");
  });
});

describe("Endpoints()", () => {
  it("should return search url", () => {
    const url = Endpoints.TickerSearch("infy");
    expect(url).toBe("http://test.com/search?query=infy")
  });

  it("should return detail url", () => {
    const url = Endpoints.TickerDetail("http://example.com/some-symbol");
    expect(url).toBe("http://test.com/detail?url=http%3A%2F%2Fexample.com%2Fsome-symbol")
  });
});
