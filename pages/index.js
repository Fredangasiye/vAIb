
import Head from 'next/head'
import { useState, useEffect } from 'react'
import projects from '../data/projects.json'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="container">
      <Head>
        <title>vAIb — AI Vibe Coding Platform</title>
        <meta name="description" content="vAIb — immersive AI portfolio and demos featuring Scoutlify, My Lobola Guide, and FOUNDIT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Enhanced particle system */}
      <div className="particles-container">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="particle" 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }} 
          />
        ))}
      </div>

      <main className={`hero ${mounted ? 'animate-fade-in' : ''}`}>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title animate-slide-in">
              Welcome to
            </h1>
            <h1 className="hero-brand gradient-text animate-float">
              vAIb
            </h1>
            <p className="hero-subtitle animate-slide-in">
              The AI Vibe Coding Platform — where innovation meets culture
            </p>
            <div className="hero-description animate-slide-in">
              <p>Discover cutting-edge applications built with modern design principles and AI-powered experiences.</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="stats-section animate-slide-in">
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number gradient-text-static">{projects.length}</div>
                <div className="stat-label">Projects</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text-static">{projects.filter(p => p.featured).length}</div>
                <div className="stat-label">Featured</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text-static">100%</div>
                <div className="stat-label">AI-Powered</div>
              </div>
              <div className="stat-item">
                <div className="stat-number gradient-text-static">∞</div>
                <div className="stat-label">Possibilities</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Gallery */}
        <section className="projects-section">
          <div className="section-header animate-slide-in">
            <h2 className="section-title">Featured Applications</h2>
            <p className="section-subtitle">Explore our collection of innovative AI-powered platforms</p>
          </div>

          <div className="projects-grid">
            {projects.map((p, index) => (
              <article 
                key={p.id} 
                className={`project-card card-modern ${p.featured ? 'featured' : ''} ${hoveredCard === p.id ? 'hovered' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onMouseEnter={() => setHoveredCard(p.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="card-header">
                  <div className="card-icon animate-float">
                    {p.thumbEmoji}
                  </div>
                  {p.featured && (
                    <div className="featured-badge animate-pulse">
                      <span className="badge-icon">🚀</span>
                      <span className="badge-text">Featured</span>
                    </div>
                  )}
                </div>
                
                <div className="card-content">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-description">{p.summary}</p>
                  
                  <div className="card-tags">
                    {p.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                {p.url && (
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="card-button btn-primary focus-ring">
                    <span>Visit App</span>
                    <span className="button-icon">→</span>
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer animate-slide-in">
          <div className="footer-content">
            <div className="footer-brand">
              <h3 className="gradient-text">vAIb</h3>
              <p>Built with modern design principles and AI-powered experiences</p>
            </div>
            
            <div className="footer-links">
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Contact</a>
              <a href="#" className="footer-link">GitHub</a>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 vAIb Platform. All rights reserved.</p>
          </div>
        </footer>
      </main>

      <style jsx>{`
        .container { 
          min-height: 100vh; 
          position: relative;
          overflow-x: hidden;
        }

        .hero { 
          width: 100%; 
          max-width: 1400px; 
          margin: 0 auto;
          padding: 0 24px;
          position: relative;
          z-index: 2;
        }

        .hero-section {
          padding: 80px 0 120px;
          text-align: center;
        }

        .hero-content {
          margin-bottom: 80px;
        }

        .hero-title { 
          font-size: 2.5rem; 
          margin: 0; 
          font-weight: 600;
          color: var(--text-secondary);
          letter-spacing: -0.02em;
        }

        .hero-brand { 
          font-size: 6rem; 
          margin: 0; 
          font-weight: 900;
          letter-spacing: -0.03em;
          text-shadow: 0 0 40px rgba(179, 136, 255, 0.4);
          margin: 20px 0;
        }

        .hero-subtitle { 
          font-size: 1.4rem;
          color: var(--text-secondary);
          margin: 20px 0 30px;
          font-weight: 400;
        }

        .hero-description {
          max-width: 600px;
          margin: 0 auto;
        }

        .hero-description p {
          font-size: 1.1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .stats-section {
          margin-top: 60px;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 40px;
          max-width: 800px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          margin-bottom: 8px;
          display: block;
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          font-weight: 500;
        }

        .projects-section {
          padding: 80px 0;
        }

        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title {
          font-size: 2.5rem;
          margin: 0 0 16px 0;
          color: var(--text-primary);
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--text-muted);
          max-width: 500px;
          margin: 0 auto;
        }

        .projects-grid { 
          display: grid; 
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); 
          gap: 32px;
          margin-bottom: 80px;
        }

        .project-card { 
          padding: 32px; 
          border-radius: 24px; 
          text-align: left; 
          cursor: pointer;
          position: relative;
          min-height: 320px;
          display: flex;
          flex-direction: column;
        }

        .project-card.featured {
          background: var(--glass-strong);
          border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
        }

        .card-icon { 
          font-size: 3.5rem; 
          margin-bottom: 0;
        }

        .featured-badge { 
          display: flex;
          align-items: center;
          gap: 6px;
          background: var(--gradient-secondary);
          color: #000; 
          padding: 8px 16px; 
          border-radius: 20px; 
          font-size: 0.8rem; 
          font-weight: 600;
        }

        .badge-icon {
          font-size: 0.9rem;
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0 16px 0;
          color: var(--text-primary);
          letter-spacing: -0.01em;
        }

        .card-description { 
          color: var(--text-secondary);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
        }

        .card-tags { 
          margin-bottom: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag {
          background: rgba(255, 255, 255, 0.1);
          color: var(--text-secondary);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }

        .tag:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .card-button { 
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          padding: 14px 24px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          margin-top: auto;
        }

        .button-icon {
          transition: transform 0.3s ease;
        }

        .card-button:hover .button-icon {
          transform: translateX(4px);
        }

        .footer { 
          padding: 80px 0 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .footer-brand h3 {
          font-size: 2rem;
          margin: 0 0 12px 0;
        }

        .footer-brand p {
          color: var(--text-muted);
          margin: 0;
        }

        .footer-links {
          display: flex;
          gap: 32px;
        }

        .footer-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: var(--text-primary);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-bottom p {
          color: var(--text-muted);
          font-size: 0.85rem;
          margin: 0;
        }

        @media (max-width: 768px) {
          .hero {
            padding: 0 16px;
          }

          .hero-section {
            padding: 60px 0 80px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .hero-brand {
            font-size: 4rem;
          }

          .hero-subtitle {
            font-size: 1.2rem;
          }

          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .stat-number {
            font-size: 2.5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .project-card {
            padding: 24px;
            min-height: 280px;
          }

          .card-icon {
            font-size: 3rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 24px;
            text-align: center;
          }

          .footer-links {
            gap: 24px;
          }
        }

        @media (max-width: 480px) {
          .hero-brand {
            font-size: 3.5rem;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </div>
  )
}
