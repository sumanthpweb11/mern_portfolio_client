import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

function App() {
  return (
    <div className="mt-5  w-100 flex flex-col items-center justify-center md:flex-row   h-screen md:max-w-[90%] mx-auto bg-slate-50 ">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
