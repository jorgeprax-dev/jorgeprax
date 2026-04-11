import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const API_KEY = 'yci5czemsofiibxgualdvxcungznkln3ppuvbga4';
    const fetchFeed = (url, source) =>
      fetch(`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}&api_key=${API_KEY}&count=3`)
        .then(r => r.json())
        .then(d => (d.items || []).slice(0, 3).map(p => ({ ...p, source })))
        .catch(() => []);

    Promise.all([
      fetchFeed('https://jorgeprax.substack.com/feed', 'Substack'),
      fetchFeed('https://sintelo.com/rss.xml', 'Sintelo'),
    ]).then(([substack, sintelo]) => {
      if (substack.length > 0 || sintelo.length > 0)
        setPosts([...substack, ...sintelo]);
    });
  }, []);

  const fallback = {
    Substack: [{ title: 'El vacío no es ausencia: es desestructuración', link: 'https://substack.com/@jorgeprax', pubDate: '2026-04-09' }],
    Sintelo: [
      { title: 'Por qué su empresa tiene buen EBITDA pero poco efectivo', link: 'https://sintelo.com/blog/ebitda-efectivo', pubDate: '2025-03-12' },
      { title: 'Cómo calcular el ROIC de su empresa en una tarde', link: 'https://sintelo.com/blog/calcular-roic', pubDate: '2025-02-28' },
      { title: 'El error más común al hacer due diligence en México', link: 'https://sintelo.com/blog/due-diligence-mexico', pubDate: '2025-02-10' },
    ],
  };

  const s = {
    page: { maxWidth: '800px', margin: '0 auto', padding: '80px 32px 120px' },
    eyebrow: { fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '2rem' },
    name: { fontFamily: 'var(--serif)', fontSize: 'clamp(48px, 7vw, 72px)', fontWeight: 400, color: '#F0EBE0', lineHeight: 1.05, letterSpacing: '-0.01em', marginBottom: '2rem' },
    bio: { fontSize: '16px', color: 'var(--muted)', lineHeight: 1.9, marginBottom: '1rem', fontWeight: 300 },
    bioStrong: { color: '#C8C3B8', fontWeight: 500 },
    bioMeta: { fontSize: '13px', color: 'var(--dim)', marginTop: '1.5rem', letterSpacing: '0.04em' },
    label: { fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '2rem', display: 'block' },
    divider: { height: '0.5px', background: 'var(--border)', margin: '5rem 0' },
    projectRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '1.5rem 0', borderBottom: '0.5px solid var(--border)' },
    projectName: { fontFamily: 'var(--serif)', fontSize: '24px', color: '#F0EBE0' },
    projectUrl: { fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.04em' },
    projectDesc: { fontSize: '13px', color: 'var(--dim)', marginTop: '0.5rem', lineHeight: 1.8 },
    sourceLabel: { fontFamily: 'var(--sans)', fontSize: '11px', letterSpacing: '0.15em', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '0', marginTop: '2rem' },
    articleRow: { display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '2rem', padding: '1rem 0', borderBottom: '0.5px solid rgba(255,255,255,0.04)', textDecoration: 'none' },
    articleTitle: { fontFamily: 'var(--serif)', fontSize: '20px', color: '#E8E3D8', lineHeight: 1.3 },
    articleDate: { fontSize: '12px', color: 'var(--dim)', whiteSpace: 'nowrap' },
    linkRow: { display: 'flex', gap: '2rem', flexWrap: 'wrap', marginTop: '1rem' },
    link: { fontSize: '14px', color: 'var(--muted)', borderBottom: '0.5px solid rgba(138,132,122,0.3)', paddingBottom: '1px' },
    footer: { fontSize: '12px', color: '#3A3430', marginTop: '5rem' },
  };

  return (
    <div style={s.page}>
      <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'var(--accent-dim)', border: '0.5px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: '24px', color: 'var(--accent)', marginBottom: '2rem' }}>
        JP
      </div>
      <div style={s.eyebrow}>Tampico, México</div>
      <div style={s.name}>Jorge Prax</div>

      <p style={s.bio}>Construyo herramientas que hacen visible lo que normalmente permanece oculto.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem' }}>
        <div>
          <div style={s.sourceLabel}>Proyectos</div>
          <div style={{ marginTop: '1.5rem' }}>
            <div style={{ fontSize: '14px', color: 'var(--accent)', marginBottom: '0.2rem' }}>Sintelo</div>
            <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7, marginBottom: '1.25rem' }}>Capital allocation advisory para empresas industriales en México. ROIC, capital de trabajo, due diligence operacional.</div>
            <div style={{ fontSize: '14px', color: 'var(--accent)', marginBottom: '0.2rem' }}>Lucidez</div>
            <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7 }}>Plataforma de autoconocimiento con IA en español. Seis instrumentos psicométricos validados.</div>
            <div style={{ marginTop: '2.5rem' }}>
              <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--dim)', textTransform: 'uppercase', marginBottom: '1rem' }}>Stack</div>
              <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 2 }}>
                Python · SQL<br/>
                JavaScript · React<br/>
                Astro · Jupyter
              </div>
            </div>
          </div>
        </div>
        <div>
          <div style={s.sourceLabel}>Formación</div>
          <div style={{ marginTop: '1.5rem' }}>
            {[
              { company: 'ITESM', role: 'Ingeniería Industrial' },
              { company: 'Carnegie Mellon University', role: 'MSc in Information Systems Management' },
              { company: 'ITESM', role: 'MSc in Management of IT' },
            ].map((e, i) => (
              <div key={i} style={{ paddingBottom: '0.85rem', marginBottom: '0.85rem', borderBottom: '0.5px solid var(--border)' }}>
                <div style={{ fontSize: '13px', color: 'var(--accent)', marginBottom: '0.2rem' }}>{e.company}</div>
                <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>{e.role}</div>
              </div>
            ))}
          </div>
          <div style={{ ...s.sourceLabel, marginTop: '2rem' }}>Experiencia</div>
          <div style={{ marginTop: '1.5rem' }}>
            {[
              { company: 'London Consulting Group · 6 años', role: 'Director de Business Intelligence · Transformación operativa en LATAM, EE.UU. y Canadá · +$25M USD en mejoras documentadas' },
              { company: 'Microsoft Azure', role: 'Supply Chain y analítica aplicada a operaciones industriales' },
              { company: 'Accenture', role: 'Integración de adquisiciones · Due diligence operativo' },
              { company: 'Elanboard · Fundador', role: 'ERP / SAP B1 para empresas manufactureras en México' },
            ].map((e, i, arr) => (
              <div key={i} style={{ paddingBottom: '0.85rem', marginBottom: '0.85rem', borderBottom: i < arr.length - 1 ? '0.5px solid var(--border)' : 'none' }}>
                <div style={{ fontSize: '13px', color: 'var(--accent)', marginBottom: '0.2rem' }}>{e.company}</div>
                <div style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6 }}>{e.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={s.divider} />
      <span style={s.label}>Proyectos</span>

      {[
        { name: 'Sintelo', url: 'https://sintelo.com', urlLabel: 'sintelo.com →', desc: 'Capital allocation advisory para empresas industriales. ROIC, capital de trabajo, due diligence operacional.' },
        { name: 'Lucidez', url: 'https://lucidez.app', urlLabel: 'lucidez.app →', desc: 'Plataforma de autoconocimiento con IA en español. Seis instrumentos psicométricos validados.' },
      ].map(p => (
        <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textDecoration: 'none' }}>
          <div style={s.projectRow}>
            <span style={s.projectName}>{p.name}</span>
            <span style={s.projectUrl}>{p.urlLabel}</span>
          </div>
          <p style={s.projectDesc}>{p.desc}</p>
        </a>
      ))}

      <div style={s.divider} />
      <span style={s.label}>Escritura</span>

      {['Substack', 'Sintelo'].map(source => {
        const sourcePosts = posts.length > 0
          ? posts.filter(p => p.source === source)
          : fallback[source];
        if (!sourcePosts || sourcePosts.length === 0) return null;
        return (
          <div key={source} style={{ marginBottom: '2rem' }}>
            <div style={s.sourceLabel}>{source}</div>
            {sourcePosts.map(a => (
              <a key={a.title} href={a.link || a.url} target="_blank" rel="noopener noreferrer" style={s.articleRow}>
                <span style={s.articleTitle}>{a.title}</span>
                <span style={s.articleDate}>{new Date(a.pubDate).toLocaleDateString('es-MX', { month: 'long', year: 'numeric' })}</span>
              </a>
            ))}
          </div>
        );
      })}

      <div style={s.divider} />
      <span style={s.label}>Contacto</span>
      <div style={s.linkRow}>
        {[
          { label: 'jorge@sintelo.com', href: 'mailto:jorge@sintelo.com' },
          { label: 'GitHub · jorgeprax-dev', href: 'https://github.com/jorgeprax-dev' },
          { label: 'GitHub · jorgeprax81', href: 'https://github.com/jorgeprax81' },
          { label: 'Substack', href: 'https://substack.com/@jorgeprax' },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={s.link}>{l.label}</a>
        ))}
      </div>

      <div style={s.footer}>Tampico, México · 2026</div>
    </div>
  );
}

export default App;
