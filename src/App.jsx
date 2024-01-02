import Home from "./page/view/home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "./page/view/errorpage.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={<Home />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
