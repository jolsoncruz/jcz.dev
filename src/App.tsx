import { Routes, Route, BrowserRouter } from "react-router-dom";
import ContainerLayout from "./layouts/ContainerLayout";
import Home from "./views/Home";
// import Maintenance from "./layouts/Maintenance";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContainerLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
