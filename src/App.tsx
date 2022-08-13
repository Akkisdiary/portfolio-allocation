import { ContentArea } from "./components";
import Search from "./components/Search";
import TickersList from "./components/TickersList";
import Chart from "./Portfolio/Chart";
import Portfolio from "./Portfolio/Portfolio";


function App() {
  return (
    <ContentArea>
      <Portfolio>
        <div className="mt-4 mb-8">
          <Search />
        </div>
        <div className="grid grid-cols-2">
          <TickersList />
          <Chart />
        </div>
      </Portfolio>
    </ContentArea>
  );
}

export default App;
