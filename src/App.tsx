import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContainerLayout from "./layouts/ContainerLayout";
import { Home, About, Projects, Contact } from "./views";
import ScrollToTop from "./components/ScrollToTop";
// import Maintenance from "./layouts/Maintenance";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ContainerLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
