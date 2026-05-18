import { Link } from 'react-router-dom';
import { Lockup } from './Brand.jsx';

const FooterCol = ({ title, items }) => (
  <div>
    <div className="eyebrow" style={{ color: 'var(--fg-2)', marginBottom: 16 }}>{title}</div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10, fontSize: 14, color: 'var(--fg-2)' }}>
      {items.map((it, i) => (
        <li key={i}>
          {it.to ? <Link to={it.to}>{it.label}</Link> :
            it.href ? <a href={it.href} target={it.external ? '_blank' : undefined} rel="noreferrer">{it.label}</a> :
            <span style={{ color: 'var(--fg-3)' }}>{it.label}</span>}
        </li>
      ))}
    </ul>
  </div>
);

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg-page)', borderTop: '1px solid var(--line-hairline)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 40px 40px' }}>
        <div className="grid-footer" style={{ marginBottom: 64 }}>
          <div>
            <Lockup size={24} gap={12} />
            <p style={{ marginTop: 24, color: 'var(--fg-3)', fontSize: 14, lineHeight: 1.6, maxWidth: 320 }}>
              Независимый VPN-сервис. Платная альтернатива — без подписок, без рекламы, без передачи данных. Управляется через Telegram-бот.
            </p>
            <div style={{ marginTop: 20, fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--fg-4)', lineHeight: 1.8 }}>
              whitecrow.online<br />
              <a href="https://t.me/white_crow_vpn_bot" target="_blank" rel="noreferrer">@white_crow_vpn_bot</a><br />
              <a href="mailto:support@whitecrow.online">support@whitecrow.online</a>
            </div>
          </div>

          <FooterCol title="Продукт" items={[
            { label: 'Как работает', to: '/#how' },
            { label: 'Тарифы', to: '/#pricing' },
            { label: 'Инструкции', to: '/connect' },
            { label: 'Реферальная программа', to: '/#why' },
          ]} />
          <FooterCol title="Документы" items={[
            { label: 'Оферта', to: '/legal/offer' },
            { label: 'Политика конфиденциальности', to: '/legal/privacy' },
            { label: 'Возврат средств', to: '/legal/refund' },
            { label: 'Правила пользования', to: '/legal/terms' },
            { label: 'Контакты', to: '/contacts' },
          ]} />
          <FooterCol title="Платежи" items={[
            { label: 'Карты РФ · Lava.ru' },
            { label: 'СБП · Lava.ru' },
            { label: 'CryptoBot · USDT' },
            { label: 'CryptoBot · TON, BTC' },
            { label: 'Возврат на счёт' },
          ]} />
        </div>

        <div className="grid-legal" style={{
          padding: '24px 28px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--line-hairline)',
          borderRadius: 'var(--r-8)',
          fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-3)',
          lineHeight: 1.7
        }}>
          <div>
            ИП Воронин Илья Андреевич · ИНН 782005694998 · ОГРНИП 325784700420652<br />
            г. Санкт-Петербург, г. Пушкин · регистрация 04.12.2025<br />
            Договор-оферта на оказание услуг (публичная) · ред. от 04.12.2025
          </div>
          <div style={{ textAlign: 'right' }}>
            Услуги предоставляются согласно ст. 437 ГК РФ.<br />
            Сервис не передаёт данные третьим лицам.<br />
            Эквайринг: Lava.ru · CryptoBot
          </div>
        </div>

        <div style={{
          marginTop: 32, display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-4)',
          letterSpacing: '0.04em'
        }}>
          <span>© 2024–2026 White Crow VPN · все права сохранены и куда-то спрятаны</span>
          <span>v2.0 · daily-billing · build 1138</span>
        </div>
      </div>
    </footer>
  );
}
