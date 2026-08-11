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
import ConsultationPage from './pages/ConsultationPage';

// Service Subpages
import GCCRegulatoryAffairs from './pages/services/GCCRegulatoryAffairs';
import RegulatoryStrategy from './pages/services/RegulatoryStrategy';
import ProductRegistration from './pages/services/ProductRegistration';
import RegulatorySubmissions from './pages/services/RegulatorySubmissions';
import DossierPreparation from './pages/services/DossierPreparation';
import CMCSupport from './pages/services/CMCSupport';
import MarketAccess from './pages/services/MarketAccess';

// Training Subpages
import GCCMasterclass from './pages/training/GCCMasterclass';
import CareerMentoring from './pages/training/CareerMentoring';
import CVLinkedInReview from './pages/training/CVLinkedInReview';
import BusinessDevelopmentTraining from './pages/training/BusinessDevelopmentTraining';

// Insights Subpages
import GCCRegulatoryUpdatesArticle from './pages/insights/GCCRegulatoryUpdatesArticle';
import RACareerArticle from './pages/insights/RACareerArticle';
import MarketAccessArticle from './pages/insights/MarketAccessArticle';
import BusinessDevelopmentArticle from './pages/insights/BusinessDevelopmentArticle';

import GoToTop from './components/GoToTop';

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

function AppInner() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/training" element={<TrainingPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/corporate-training" element={<CorporateTrainingPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/consultation" element={<ConsultationPage />} />

          {/* Service Subpages */}
          <Route path="/services/gcc-regulatory-affairs" element={<GCCRegulatoryAffairs />} />
          <Route path="/services/regulatory-strategy" element={<RegulatoryStrategy />} />
          <Route path="/services/product-registration" element={<ProductRegistration />} />
          <Route path="/services/regulatory-submissions" element={<RegulatorySubmissions />} />
          <Route path="/services/dossier-preparation" element={<DossierPreparation />} />
          <Route path="/services/cmc-regulatory-support" element={<CMCSupport />} />
          <Route path="/services/pharmaceutical-market-access" element={<MarketAccess />} />

          {/* Training & Mentoring Subpages */}
          <Route path="/training/gcc-regulatory-affairs-masterclass" element={<GCCMasterclass />} />
          <Route path="/training/career-mentoring" element={<CareerMentoring />} />
          <Route path="/training/cv-linkedin-review" element={<CVLinkedInReview />} />
          <Route path="/training/business-development-training" element={<BusinessDevelopmentTraining />} />

          {/* Insights Subpages */}
          <Route path="/insights/gcc-regulatory-updates" element={<GCCRegulatoryUpdatesArticle />} />
          <Route path="/insights/regulatory-affairs-career" element={<RACareerArticle />} />
          <Route path="/insights/pharmaceutical-market-access" element={<MarketAccessArticle />} />
          <Route path="/insights/business-development" element={<BusinessDevelopmentArticle />} />

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
