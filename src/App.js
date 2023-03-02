import { Navigate, Route, Routes } from "react-router-dom";
import About from "./components/page/About";
import Home from "./components/page/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Navigate to={"home"} />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
