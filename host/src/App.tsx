import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './navigation';
import './App.css';
import Home from './pages/Home';
import Remote1 from './pages/remote1';

const App = () => {
  return (
    <BrowserRouter basename="/">
      <Navigation />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/remote1" Component={() => <Remote1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
