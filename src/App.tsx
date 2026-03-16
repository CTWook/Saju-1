import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FortuneResultPage from './pages/FortuneResultPage';
import TarotPage from './pages/TarotPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fortune/:category" element={<FortuneResultPage />} />
          <Route path="/tarot" element={<TarotPage />} />
          <Route path="/today" element={<FortuneResultPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
