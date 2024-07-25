import SearchWrap from './components/SearchWrap';
import MenuWrap from './components/MenuWrap';
import Register from './pages/applicants/Register';
import Home from './pages/home/Home';

import { Routes, Route } from 'react-router-dom';
import Applicants from './components/Applicants';

const App = () => {
  return (
    <div className="dashboard">
      <SearchWrap />
      <MenuWrap />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/register" element={<Register />} />
        <Route path="/applicants" element={<Applicants />} />
      </Routes>
    </div>
  );
};

export default App;