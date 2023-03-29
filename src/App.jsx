import { Routes, Route } from "react-router-dom";

import { Layout } from "./components";
import { AboutPage, LandingPage } from "./pages";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/portfolio" element={<LandingPage />} />
        <Route path="/portfolio/about" element={<AboutPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
