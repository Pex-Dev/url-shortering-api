import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import AdvancedStatistics from "./components/Layout/AdvancedStatistics";
import URLShortering from "./components/Layout/URLShortering";
import GetStarted from "./components/Layout/GetStarted";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-statistics mt-40">
        <URLShortering />
        <AdvancedStatistics />
        <GetStarted />
      </div>
    </>
  );
}

export default App;
