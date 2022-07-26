import { Route, Routes } from 'react-router-dom';
import Public from './pages/public/Public';
import Private from 'pages/private/Private';
import Header from './components/header/Header';

function App() {
  return (
    <section className="w-4/5 m-auto mt-10">
      <Header />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/private" element={<Private />} />
      </Routes>
    </section>
  );
}

export default App;
