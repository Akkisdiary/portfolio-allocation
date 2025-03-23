import { tickersData } from "../../api/mock/data";
import { Metric } from "../Manager";
import { generateDoughNutChartData, priceByExchangeRate } from "./utils";

const holdings = tickersData.map((d) => {
  return { ...d, quantity: 1 };
});

const exchangeRates = {
  "usd-eur": 0.9958,
  "usd-inr": 79.91,
  "inr-usd": 0.012,
};

describe("priceByExchangeRate()", () => {
  it("converts a to a", () => {
    const rates = {};
    const result = priceByExchangeRate(100, "USD", "USD", rates);
    expect(result).toEqual(100);
  });

  it("converts a to b", () => {
    const rates = { "usd-inr": 86 };
    const result = priceByExchangeRate(100, "USD", "INR", rates);
    expect(result).toEqual(8600);
  });

  it("converts b to a", () => {
    const rates = { "usd-eur": 1.2 };
    const result = priceByExchangeRate(120, "EUR", "USD", rates);
    expect(result).toEqual(100);
  });
});

describe("generateDoughNutChartData()", () => {
  it("convert by provided key", () => {
    const holdings = [
      {
        id: "NASDAQ:META",
        symbol: "META",
        name: "Meta Platforms, Inc.",
        price: 200,
        sector: "Technology Services",
        industry: "Internet Software/Services",
        currency: "USD",
        exchange: "NASDAQ",
        country: "United States",
        quantity: 1,
      },
      {
        id: "NASDAQ:AMZN",
        symbol: "AMZN",
        name: "Amazon.com, Inc.",
        price: 140,
        sector: "Retail Trade",
        industry: "Internet Retail",
        currency: "USD",
        exchange: "NASDAQ",
        country: "United States",
        quantity: 2,
      },
    ];
    const actual1 = generateDoughNutChartData(holdings, "sector");
    const expected1 = {
      labels: ["Technology Services", "Retail Trade"],
      datasets: [
        {
          data: [200, 280],
        },
      ],
    };
    expect(actual1).toMatchObject(expected1);

    const actual2 = generateDoughNutChartData(holdings, "industry");
    const expected2 = {
      labels: ["Internet Software/Services", "Internet Retail"],
      datasets: [
        {
          data: [200, 280],
        },
      ],
    };
    expect(actual2).toMatchObject(expected2);
  });

  it("aggregates over attribute", () => {});
    const holdings = [
      {
        id: "NASDAQ:META",
        symbol: "META",
        name: "Meta Platforms, Inc.",
        price: 179.3,
        sector: "Technology Services",
        industry: "Internet Software/Services",
        currency: "USD",
        exchange: "NASDAQ",
        country: "United States",
        quantity: 1,
      },
      {
        id: "NASDAQ:AMZN",
        symbol: "AMZN",
        name: "Amazon.com, Inc.",
        price: 144.34,
        sector: "Retail Trade",
        industry: "Internet Retail",
        currency: "USD",
        exchange: "NASDAQ",
        country: "United States",
        quantity: 1,
      },
      {
        id: "NASDAQ:AAPL",
        symbol: "AAPL",
        name: "Apple Inc.",
        price: 173.14,
        sector: "Retail Trade",
        industry: "Telecommunications Equipment",
        currency: "USD",
        exchange: "NASDAQ",
        country: "United States",
        quantity: 1,
      },
      {
        id: "NASDAQ:GOOG",
        symbol: "GOOG",
        name: "Alphabet Inc.",
        price: 122.72,
        sector: "Technology Services",
        industry: "Internet Software/Services",
        currency: "USD",
        exchange: "NASDAQ",
        country: "United States",
        quantity: 1,
      },
    ];
    const actual = generateDoughNutChartData(holdings, "sector");
    const expected = {
      labels: ["Technology Services", "Retail Trade"],
      datasets: [
        {
          data: [179.3 + 122.72, 144.34 + 173.14],
        },
      ],
    };
    expect(actual).toMatchObject(expected);

});
