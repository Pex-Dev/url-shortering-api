import Header from "./components/Layout/Header";
import Hero from "./components/Layout/Hero";
import AdvancedStatistics from "./components/Layout/AdvancedStatistics";
import URLShortering from "./components/Layout/URLShortering";
import GetStarted from "./components/Layout/GetStarted";
import Footer from "./components/Layout/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <div className="bg-statistics mt-40">
        <URLShortering />
        <AdvancedStatistics />
      </div>
      <GetStarted />
      <Footer />
    </>
  );
}

export default App;
