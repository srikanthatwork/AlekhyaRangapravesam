// import React from "react";
// import { ScrollText } from "lucide-react";
// import Navbar from "./components/Navbar";
// import EventBanner from "./components/EventBanner";
// import CountdownTimer from "./components/CountdownTimer";
// import Biography from "./components/Biography";
// import ExpertGuidance from "./components/ExpertGuidance";
// import Academic from "./components/Academic";
// import Cultural from "./components/Cultural";
// import Closing from "./components/Closing";
// import Footer from "./components/Footer";
// import Hero from "./components/Hero";
// import ProgramGuide from "./components/ProgramGuide";

// function App() {
//   return (
//     <div className="min-h-screen bg-amber-50 text-stone-800 font-serif">
//       <Navbar />
//       <EventBanner />
//       <Hero />
//       <CountdownTimer />
//       <ProgramGuide />
//       <Biography />
//       <ExpertGuidance />
//       <Academic />
//       <Cultural />
//       <Closing />
//       <Footer />
//       {/* Scroll to top button */}
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         className="fixed bottom-8 right-8 bg-amber-700 text-amber-50 p-3 rounded-full shadow-lg hover:bg-amber-800 transition-all duration-300 z-50"
//         aria-label="Scroll to top"
//       >
//         <ScrollText size={24} />
//       </button>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./components/Hero";
import ProgramGuide from "./pages/ProgramGuide";
import Biography from "./pages/Biography";
import ExpertGuidance from "./pages/ExpertGuidance";
import Academic from "./pages/Academic";
import Cultural from "./pages/Cultural";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-amber-50 text-stone-800 font-serif">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/program-guide" element={<ProgramGuide />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/expert-guidance" element={<ExpertGuidance />} />
          <Route path="/academic" element={<Academic />} />
          <Route path="/kuchipudi" element={<Cultural />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
