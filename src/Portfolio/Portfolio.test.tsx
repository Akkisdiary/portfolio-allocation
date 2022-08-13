import { render, screen, cleanup } from "@testing-library/react";

import Portfolio from "./Portfolio";
import TickerList from "../components/TickersList";

afterEach(cleanup);

const renderTickerList = () => {
  render(
    <Portfolio>
      <TickerList />
    </Portfolio>
  );
};

describe("<Portfolio - TickerList />", () => {
  it("should fetch ticker detail", () => {});
});
