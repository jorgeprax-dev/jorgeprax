import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const s = {
    page: {
      maxWidth: '620px', margin: '0 auto', padding: '72px 24px 96px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
      background: '#000', minHeight: '100vh', color: '#fff',
    },
    name: { fontSize: '22px', fontWeight: 500, color: '#fff', letterSpacing: '-0.3px' },
    role: { fontSize: '15px', color: '#888', marginTop: '4px' },
    bio: { fontSize: '15px', color: '#999', marginTop: '20px', lineHeight: 1.7 },
    label: { fontSize: '11px', fontWeight: 500, color: '#555', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '52px', marginBottom: '16px' },
    card: { display: 'block', textDecoration: 'none', background: '#111', border: '0.5px solid #333', borderRadius: '12px', padding: '18px 20px', marginBottom: '10px' },
    cardName: { fontSize: '15px', fontWeight: 500, color: '#fff' },
    cardUrl: { fontSize: '12px', color: '#555' },
    cardDesc: { fontSize: '14px', color: '#888', marginTop: '6px', lineHeight: 1.6 },
    tags: { display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' },
    divider: { height: '0.5px', background: '#222', marginTop: '52px' },
    footer: { fontSize: '12px', color: '#555', marginTop: '24px' },
  };

  const projects = [
    {
      name: 'Sintelo', url: 'https://sintelo.com', urlLabel: 'sintelo.com ↗',
      desc: 'Capital allocation advisory para empresas industriales. Encontramos el valor oculto en su empresa mediante análisis de ROIC y capital de trabajo.',
      tags: [['#1a2a3a', '#5a9fd4', 'Consultoría'], ['#1a1a1a', '#888', 'Industrial · México']],
    },
    {
      name: 'Lucidez', url: 'https://lucidez.app', urlLabel: 'lucidez.app ↗',
      desc: 'Plataforma de autoconocimiento con IA. Seis instrumentos psicométricos validados. El mapa más preciso de cómo funciona tu mente.',
      tags: [['#0d2a20', '#3dba8a', 'Producto'], ['#1a1a1a', '#888', 'IA · Español']],
    },
  ];

  const articles = [
    { title: 'El vacío no es ausencia: es desestructuración', meta: 'Substack · Abril 2026', url: 'https://substack.com/@jorgeprax' },
    { title: 'Por qué su empresa tiene buen EBITDA pero poco efectivo', meta: 'Sintelo · Marzo 2025', url: 'https://www.sintelo.com/blog/ebitda-efectivo' },
    { title: 'Cómo calcular el ROIC de su empresa en una tarde', meta: 'Sintelo · Febrero 2025', url: 'https://www.sintelo.com/blog/calcular-roic' },
    { title: 'El error más común al hacer due diligence operacional en México', meta: 'Sintelo · Febrero 2025', url: 'https://www.sintelo.com/blog/due-diligence-mexico' },
  ];

  const links = [
    { label: 'jorge@sintelo.com', href: 'mailto:jorge@sintelo.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/jorgeprax' },
    { label: 'Substack', href: 'https://substack.com/@jorgeprax' },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://substack.com/@jorgeprax/feed')
      .then(r => r.json())
      .then(data => {
        if (data.items) setPosts(data.items.slice(0, 4));
      })
      .catch(() => {});
  }, []);

  return (
    <div style={s.page}>
      <div style={s.name}>Jorge Prax <span style={{ fontSize: '16px', fontWeight: 400, color: '#555' }}>(Jorge Castro)</span></div>
      <div style={s.role}>Fundador · Tampico, México</div>
      <p style={s.bio}>
        Construyo herramientas que hacen visible lo que normalmente permanece oculto.
        <br /><br />
        <strong style={{ color: '#fff' }}>Sintelo</strong> — consultoría de capital para empresas industriales en México. Diagnosticamos el ROIC real, descomponemos el capital de trabajo y priorizamos las palancas de mayor impacto. Antes: London Consulting Group (Director de Business Intelligence, +$25M USD en mejoras documentadas), Microsoft Azure, Accenture.
        <br /><br />
        <strong style={{ color: '#fff' }}>Lucidez</strong> — plataforma de autoconocimiento con IA en español. Seis instrumentos psicométricos validados. El mapa más preciso de cómo funciona tu mente.
        <br /><br />
        <span style={{ color: '#555' }}>Ingeniería Industrial · ITESM · MSc Carnegie Mellon</span>
      </p>

      <div style={s.label}>Proyectos</div>
      {projects.map(p => (
        <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={s.card}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={s.cardName}>{p.name}</span>
            <span style={s.cardUrl}>{p.urlLabel}</span>
          </div>
          <p style={s.cardDesc}>{p.desc}</p>
          <div style={s.tags}>
            {p.tags.map(([bg, color, label]) => (
              <span key={label} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 8px', borderRadius: '6px', background: bg, color }}>{label}</span>
            ))}
          </div>
        </a>
      ))}

      <div style={s.label}>Escritura</div>
      {(posts.length > 0 ? posts : articles).map((a, i) => (
        <a key={a.title} href={a.url || a.link} target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px',
          padding: '14px 0', textDecoration: 'none',
          borderTop: i === 0 ? '0.5px solid #222' : 'none',
          borderBottom: '0.5px solid #222',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#fff', lineHeight: 1.4 }}>{a.title}</div>
            <div style={{ fontSize: '12px', color: '#555', marginTop: '3px' }}>
              {a.pubDate ? new Date(a.pubDate).toLocaleDateString('es-MX', { month: 'long', year: 'numeric' }) : a.meta}
            </div>
          </div>
          <span style={{ fontSize: '13px', color: '#555', flexShrink: 0, paddingTop: '2px' }}>↗</span>
        </a>
      ))}

      <div style={s.label}>Contacto</div>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {links.map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
            fontSize: '14px', color: '#888', textDecoration: 'none',
            borderBottom: '0.5px solid #333', paddingBottom: '1px',
          }}>{l.label}</a>
        ))}
      </div>

      <div style={s.divider} />
      <div style={s.footer}>Tampico, México · 2026</div>
    </div>
  );
}

export default App;