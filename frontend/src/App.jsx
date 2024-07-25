import SearchWrap from "./components/SearchWrap";
import MenuWrap from "./components/MenuWrap";
import Register from "./pages/applicants/Register";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Applicants from "./pages/applicants/Applicants";

const App = () => {
  return (
    <div className="dashboard">
      <SearchWrap />
      <MenuWrap />
      <main className="content-wrap col-span-9 row-span-11 px-12 overflow-auto">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/register" element={<Register />} />
          <Route path="/applicants" element={<Applicants />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;