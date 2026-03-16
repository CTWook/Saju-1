import TopNavBar from './components/TopNavBar';
import Footer from './components/Footer';
import BottomNavBar from './components/BottomNavBar';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="text-on-surface">
      <TopNavBar />
      <main>
        <HomePage />
      </main>
      <Footer />
      <BottomNavBar />
    </div>
  );
}

export default App;
