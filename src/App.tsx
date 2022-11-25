import { Route, Routes, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Public from 'pages/Public';
import Private from 'pages/Private';
import Header from 'components/header/Header';

function App() {
  const location = useLocation();

  return (
    <section className="w-4/5 m-auto mt-20">
      <Header />
      <TransitionGroup className="transitions-wrapper">
        <CSSTransition key={location.pathname} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Public />} />
            <Route path="/private" element={<Private />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </section>
  );
}

export default App;
