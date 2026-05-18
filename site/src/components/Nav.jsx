import { Link, NavLink } from 'react-router-dom';
import { Lockup } from './Brand.jsx';

export default function Nav() {
  const linkBase = { textDecoration: 'none', fontSize: 14, color: 'var(--fg-2)' };
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 10,
      backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
      background: 'color-mix(in srgb, var(--bg-page) 75%, transparent)',
      borderBottom: '1px solid var(--line-hairline)'
    }}>
      <div className="container-tight nav-inner">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Lockup size={20} gap={10} />
        </Link>
        <div className="nav-links">
          <NavLink to="/#how" style={linkBase}>Как работает</NavLink>
          <NavLink to="/#pricing" style={linkBase}>Тарифы</NavLink>
          <NavLink to="/connect" style={linkBase}>Подключение</NavLink>
          <NavLink to="/#faq" style={linkBase}>FAQ</NavLink>
          <a
            href="https://t.me/WhiteCrowSupport"
            target="_blank"
            rel="noreferrer"
            style={{ ...linkBase, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)' }}
          >
            @WhiteCrowSupport
          </a>
        </div>
        <div className="nav-cta-row">
          <a
            href="https://t.me/white_crow_vpn_bot"
            target="_blank"
            rel="noreferrer"
            className="btn-login"
            style={{
              background: 'transparent', border: '1px solid var(--line-default)',
              padding: '10px 16px', borderRadius: 'var(--r-6)',
              fontSize: 14, color: 'var(--fg-1)', textDecoration: 'none'
            }}
          >
            Войти
          </a>
          <a
            href="https://t.me/white_crow_vpn_bot"
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'var(--accent)', color: '#fff', border: 0,
              padding: '10px 18px', borderRadius: 'var(--r-6)',
              fontSize: 14, fontWeight: 500, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 8
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12 }}>@white_crow_vpn_bot</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
