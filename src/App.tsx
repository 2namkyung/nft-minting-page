import Public from './pages/public/Index';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <section className="w-4/5 m-auto mt-10">
      <Header />
      <Routes>
        <Route path="/" element={<Public />} />
        <Route path="/private" element={<></>} />
      </Routes>
    </section>
  );
}

export default App;
