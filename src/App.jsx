import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home/HomePage';
import ChoiceCars from './pages/ChoiceCars/ChoiceCars';
import FavoritePage from './pages/Favorite/FavoritePage';

import { AppWrapper } from './App.styled';

function App() {
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<ChoiceCars />} />
        <Route path="/favorites" element={<FavoritePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
