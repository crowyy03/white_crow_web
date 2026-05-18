import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Connect from './pages/Connect.jsx';
import Contacts from './pages/Contacts.jsx';
import Offer from './pages/Offer.jsx';
import Privacy from './pages/Privacy.jsx';
import Refund from './pages/Refund.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function CrowDropoutFilter() {
  // Mobile Safari may paint a stray black box if the defs-only SVG isn't
  // explicitly zero-sized and clipped — pin it to 0/0 and hide overflow.
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: 0,
        height: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
      }}
    >
      <defs>
        <filter id="crow-dropout" x="-2%" y="-2%" width="104%" height="104%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="1"
            seed="11"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    7 0 0 0 -3.8"
            result="mask"
          />
          <feComposite in="SourceGraphic" in2="mask" operator="out" />
        </filter>
      </defs>
    </svg>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CrowDropoutFilter />
      <Nav />
      <main className="site-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/legal/offer" element={<Offer />} />
          <Route path="/legal/privacy" element={<Privacy />} />
          <Route path="/legal/refund" element={<Refund />} />
          <Route path="/legal/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
