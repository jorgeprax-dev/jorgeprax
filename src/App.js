import './App.css';

function App() {
  return (
    <div style={{
      maxWidth: '620px',
      margin: '0 auto',
      padding: '72px 24px 96px',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif",
    }}>

      <div style={{ fontSize: '22px', fontWeight: 500, color: '#000', letterSpacing: '-0.3px' }}>Jorge Castro</div>
      <div style={{ fontSize: '15px', color: '#888', marginTop: '4px' }}>Fundador · Tampico, México</div>

      <p style={{ fontSize: '15px', color: '#555', marginTop: '20px', lineHeight: 1.7 }}>
        Ingeniero industrial. MSc Carnegie Mellon. Trabajo en la intersección de capital, operaciones y mente — buscando lo que permanece oculto a simple vista. Antes en London Consulting Group, Microsoft y Accenture.
      </p>

      <div style={{ fontSize: '11px', fontWeight: 500, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '52px', marginBottom: '16px' }}>Proyectos</div>

      {[
        {
          name: 'Sintelo',
          url: 'https://sintelo.com',
          urlLabel: 'sintelo.com ↗',
          desc: 'Capital allocation advisory para empresas industriales. Encontramos el valor oculto en su empresa mediante análisis de ROIC y capital de trabajo.',
          tags: [['#E6F1FB', '#0C447C', 'Consultoría'], ['#F1EFE8', '#444441', 'Industrial · México']],
        },
        {
          name: 'Lucidez',
          url: 'https://lucidez.app',
          urlLabel: 'lucidez.app ↗',
          desc: 'Plataforma de autoconocimiento con IA. Seis instrumentos psicométricos validados. El mapa más preciso de cómo funciona tu mente.',
          tags: [['#E1F5EE', '#085041', 'Producto'], ['#F1EFE8', '#444441', 'IA · Español']],
        },
      ].map(p => (
        <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" style={{
          display: 'block', textDecoration: 'none',
          background: '#fff', border: '0.5px solid rgba(0,0,0,0.1)',
          borderRadius: '12px', padding: '18px 20px', marginBottom: '10px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '15px', fontWeight: 500, color: '#000' }}>{p.name}</span>
            <span style={{ fontSize: '12px', color: '#aaa' }}>{p.urlLabel}</span>
          </div>
          <p style={{ fontSize: '14px', color: '#666', marginTop: '6px', lineHeight: 1.6 }}>{p.desc}</p>
          <div style={{ display: 'flex', gap: '6px', marginTop: '10px', flexWrap: 'wrap' }}>
            {p.tags.map(([bg, color, label]) => (
              <span key={label} style={{ fontSize: '11px', fontWeight: 500, padding: '3px 8px', borderRadius: '6px', background: bg, color }}>{label}</span>
            ))}
          </div>
        </a>
      ))}

      <div style={{ fontSize: '11px', fontWeight: 500, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '52px', marginBottom: '0' }}>Escritura</div>

      {[
        { title: 'El vacío no es ausencia: es desestructuración', meta: 'Substack · Abril 2026', url: 'https://substack.com/@jorgeprax' },
        { title: 'Por qué su empresa tiene buen EBITDA pero poco efectivo', meta: 'Sintelo · Marzo 2025', url: 'https://www.sintelo.com/blog/ebitda-efectivo' },
        { title: 'Cómo calcular el ROIC de su empresa en una tarde', meta: 'Sintelo · Febrero 2025', url: 'https://www.sintelo.com/blog/calcular-roic' },
        { title: 'El error más común al hacer due diligence operacional en México', meta: 'Sintelo · Febrero 2025', url: 'https://www.sintelo.com/blog/due-diligence-mexico' },
      ].map((a, i, arr) => (
        <a key={a.title} href={a.url} target="_blank" rel="noopener noreferrer" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px',
          padding: '14px 0', textDecoration: 'none',
          borderTop: i === 0 ? '0.5px solid rgba(0,0,0,0.1)' : 'none',
          borderBottom: '0.5px solid rgba(0,0,0,0.1)',
        }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 500, color: '#000', lineHeight: 1.4 }}>{a.title}</div>
            <div style={{ fontSize: '12px', color: '#aaa', marginTop: '3px' }}>{a.meta}</div>
          </div>
          <span style={{ fontSize: '13px', color: '#aaa', flexShrink: 0, paddingTop: '2px' }}>↗</span>
        </a>
      ))}

      <div style={{ fontSize: '11px', fontWeight: 500, color: '#aaa', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '52px', marginBottom: '16px' }}>Contacto</div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {[
          { label: 'jorge@sintelo.com', href: 'mailto:jorge@sintelo.com' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/jorgeprax' },
          { label: 'Substack', href: 'https://substack.com/@jorgeprax' },
        ].map(l => (
          <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{
            fontSize: '14px', color: '#666', textDecoration: 'none',
            borderBottom: '0.5px solid rgba(0,0,0,0.15)', paddingBottom: '1px',
          }}>{l.label}</a>
        ))}
      </div>

      <div style={{ height: '0.5px', background: 'rgba(0,0,0,0.1)', marginTop: '52px' }} />
      <div style={{ fontSize: '12px', color: '#aaa', marginTop: '24px' }}>Tampico, México · 2026</div>

    </div>
  );
}

export default App;
