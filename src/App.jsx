import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TrainingPage from './pages/TrainingPage';
import InsightsPage from './pages/InsightsPage';
import CorporateTrainingPage from './pages/CorporateTrainingPage';
import CareersPage from './pages/CareersPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'var(--gray-50)', textAlign: 'center', padding: '40px' }}>
      <div style={{ fontFamily: 'Playfair Display', fontSize: '100px', fontWeight: 700, color: 'var(--gold)', lineHeight: 1 }}>404</div>
      <h1 style={{ fontFamily: 'Playfair Display', fontSize: '32px', color: 'var(--primary-dark)', margin: '16px 0 8px' }}>Page Not Found</h1>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>The page you're looking for doesn't exist.</p>
      <a href="/" className="btn-primary">Back to Home</a>
    </div>
  );
}

import GoToTop from './components/GoToTop';

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/corporate-training" element={<CorporateTrainingPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <GoToTop />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}
