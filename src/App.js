import { Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Work from "./pages/Work/Work";

function App() {
  return (
    <div className=" bg-slate-50  mt-3 w-full h-screen  flex flex-row items-center justify-center md:flex-row md:max-w-[90%] md:max-h-[95vh] mx-auto  ">
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
