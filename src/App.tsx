import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import AdvancedStatistics from "./components/Layout/AdvancedStatistics";
import URLShortering from "./components/Layout/URLShortering";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-statistics mt-40">
        <URLShortering />
        <AdvancedStatistics />
      </div>
    </>
  );
}

export default App;
