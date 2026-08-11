import { Calendar, User, Clock, ArrowRight, CheckCircle, GraduationCap } from 'lucide-react';
import useSEO from '../../hooks/useSEO';
import LeadMagnet from '../../components/LeadMagnet';

export default function RACareerArticle() {
  useSEO({
    title: 'How to Build a High-Growth Career in Regulatory Affairs | Guide for Pharmacists',
    description: 'Practical career roadmap for pharmacists and science graduates looking to enter and excel in pharmaceutical regulatory affairs. Core competencies, eCTD skills, and mentorship advice by Dr. Anwar Hussain Mohammed PhD.',
    keywords: 'how to become regulatory affairs specialist, regulatory affairs career path, pharmacist career in regulatory affairs, RA career roadmap GCC, regulatory affairs mentor',
    schema: {
      '@type': 'Article',
      'headline': 'How to Build a High-Growth Career in Regulatory Affairs: A Roadmap for Pharmacists',
      'author': {
        '@type': 'Person',
        'name': 'Dr. Anwar Hussain Mohammed, PhD',
        '@id': 'https://regexcellence.co.uk/#founder'
      },
      'publisher': { '@id': 'https://regexcellence.co.uk/#organization' },
      'datePublished': '2025-02-01',
      'dateModified': '2026-02-01'
    }
  });

  return (
    <div>
      <article className="container" style={{ padding: '60px 0', maxWidth: '880px' }}>
        <div style={{ marginBottom: '32px' }}>
          <span className="section-label">Career Progression</span>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, color: 'var(--primary-dark)', margin: '12px 0' }}>
            How to Build a High-Growth Career in Regulatory Affairs: A Roadmap for Pharmacists
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '14px', color: 'var(--text-secondary)', borderBottom: '1px solid var(--gray-200)', paddingBottom: '20px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><User size={16} /> Dr. Anwar Hussain Mohammed, PhD</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={16} /> Updated: Feb 2026</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> 7 min read</span>
          </div>
        </div>

        <div style={{ fontSize: '16px', lineHeight: 1.85, color: '#334155' }}>
          <p className="lead" style={{ fontSize: '18px', fontWeight: 500, color: 'var(--primary-dark)', marginBottom: '24px' }}>
            Pharmaceutical Regulatory Affairs (RA) is one of the most intellectually rewarding and lucrative career domains in life sciences. Yet, many qualified pharmacists struggle to bridge the gap from retail or hospital pharmacy into industrial regulatory affairs roles.
          </p>

          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '26px', color: 'var(--primary-dark)', marginTop: '36px', marginBottom: '16px' }}>
            1. Core Technical Competencies Employers Look For
          </h2>
          <p>
            To stand out to recruiters and RA hiring managers, candidates must demonstrate practical familiarity with key regulatory concepts:
          </p>
          <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
            <li style={{ marginBottom: '8px' }}><strong>eCTD Module Structure:</strong> Understanding the 5-module CTD format (Module 1 regional legal, Module 2 summaries, Module 3 CMC, Module 4 nonclinical, Module 5 clinical).</li>
            <li style={{ marginBottom: '8px' }}><strong>Health Authority Guidelines:</strong> Familiarity with SFDA, MOHAP, MHRA, EMA, and ICH guidelines.</li>
            <li style={{ marginBottom: '8px' }}><strong>Lifecycle Management:</strong> Knowledge of Type IA/IB/II variations, extensions, and annual regulatory maintenance.</li>
          </ul>

          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '26px', color: 'var(--primary-dark)', marginTop: '36px', marginBottom: '16px' }}>
            2. Crafting a Targeted Regulatory Affairs CV
          </h2>
          <p>
            Generic resumes fail in regulatory recruitment. Your CV must use precise industry terminology and highlight hands-on exposure to submission software, deficiency letter handling, and cross-functional collaboration with quality assurance teams.
          </p>

          <h2 style={{ fontFamily: 'Playfair Display', fontSize: '26px', color: 'var(--primary-dark)', marginTop: '36px', marginBottom: '16px' }}>
            3. The Value of Strategic Career Mentoring
          </h2>
          <p>
            Self-study can take years. Working 1-on-1 with an experienced mentor provides direct insights into technical interview questions, resume positioning, and strategic career advancement.
          </p>
        </div>

        <LeadMagnet />

        <div style={{ background: 'var(--gray-50)', padding: '32px', borderRadius: '16px', border: '1px solid var(--gray-200)', marginTop: '40px', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Playfair Display', fontSize: '24px', color: 'var(--primary-dark)', marginBottom: '10px' }}>
            Accelerate Your Regulatory Affairs Career
          </h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
            Book a 1-on-1 career coaching session with Dr. Anwar Hussain Mohammed PhD.
          </p>
          <a href="/training/career-mentoring" className="btn-primary">
            Explore Mentoring Options <ArrowRight size={16} />
          </a>
        </div>
      </article>
    </div>
  );
}
