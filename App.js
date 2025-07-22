import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import WOW from "wow.js";
import PersonalPortfolio from "./pages/Home/PersonalPortfolio";
import PortfolioDetailsPage from "./pages/PortfolioDetailsPage";
import AnimatedCursor from "react-animated-cursor";

function App() {
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={32}
        color="248, 158, 82"
        outerAlpha={0.15}
        innerScale={0}
        outerScale={0}
        clickables={["a", "input", "button", ".link"]}
      />
      <Routes>
        <Route path="/" element={<PersonalPortfolio />} />
        {/* <Route path="/project-details" element={<PortfolioDetailsPage />} /> Critical Route */}
        {/* Add other routes as needed */}
      </Routes>
    </>
  );
}

export default App;