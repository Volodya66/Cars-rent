import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home/HomePage';
import ChoiceCars from './pages/ChoiceCars/ChoiceCars';

import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<ChoiceCars />} />
        <Route path="/favorites" element={<h1>hi</h1>} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
