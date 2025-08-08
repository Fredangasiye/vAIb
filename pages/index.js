
import Head from 'next/head'
import projects from '../data/projects.json'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>vAIb — AI Vibe Coding Platform</title>
        <meta name="description" content="vAIb — immersive AI portfolio and demos" />
      </Head>

      <main className="hero">
        <h1 className="title">Welcome to <span className="vaib">vAIb</span></h1>
        <p className="subtitle">The AI Vibe Coding Platform — demo viewer</p>
        <section className="gallery">
          {projects.map(p => (
            <article key={p.id} className="card">
              <div className="thumb" aria-hidden="true">{p.thumbEmoji}</div>
              <h3>{p.title}</h3>
              <p className="summary">{p.summary}</p>
              <div className="meta">{p.tags.join(' • ')}</div>
            </article>
          ))}
        </section>
        <footer className="footer">Built with vibe • Minimal viewer</footer>
      </main>

    <style jsx>{`
      .container { min-height:100vh; display:flex; align-items:center; justify-content:center; }
      .hero { width:100%; max-width:1100px; padding:48px; text-align:center; color:#fff; }
      .title { font-size:3.2rem; margin:0; font-weight:800; }
      .vaib { background:linear-gradient(90deg,#b388ff,#7dd3fc); -webkit-background-clip:text; background-clip:text; color:transparent; }
      .subtitle { margin-top:8px; opacity:0.9; font-size:1.15rem }
      .gallery { margin-top:36px; display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:18px; }
      .card { background:rgba(255,255,255,0.06); padding:18px; border-radius:12px; text-align:left; box-shadow:0 6px 24px rgba(2,6,23,0.6); transition:transform .22s ease, box-shadow .22s ease; }
      .card:hover{ transform:translateY(-6px); box-shadow:0 14px 40px rgba(2,6,23,0.65); }
      .thumb{ font-size:2.2rem; margin-bottom:8px }
      .summary{ opacity:0.9; font-size:0.95rem }
      .meta{ margin-top:12px; opacity:0.75; font-size:0.85rem }
      .footer{ margin-top:28px; opacity:0.7 }
    `}</style>

    </div>
  )
}
