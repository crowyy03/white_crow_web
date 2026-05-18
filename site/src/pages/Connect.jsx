
const platforms = [
  {
    os: 'iOS',
    clients: [
      { name: 'Happ', store: 'https://apps.apple.com/app/happ-proxy-utility/id6504287215' },
      { name: 'Streisand', store: 'https://apps.apple.com/app/streisand/id6450534064' },
      { name: 'V2Box', store: 'https://apps.apple.com/app/v2box-v2ray-client/id6446814690' }
    ],
    note: 'Открой бота, скопируй ссылку подписки, в клиенте: «Добавить из URL» → вставь.'
  },
  {
    os: 'Android',
    clients: [
      { name: 'v2rayNG', store: 'https://play.google.com/store/apps/details?id=com.v2ray.ang' },
      { name: 'NekoBox', store: 'https://github.com/MatsuriDayo/NekoBoxForAndroid/releases' },
      { name: 'Hiddify', store: 'https://play.google.com/store/apps/details?id=app.hiddify.com' }
    ],
    note: 'Установи клиент, скопируй ссылку из бота, в приложении выбери «Импорт из буфера».'
  },
  {
    os: 'macOS',
    clients: [
      { name: 'Happ', store: 'https://apps.apple.com/app/happ-proxy-utility/id6504287215' },
      { name: 'V2RayU', store: 'https://github.com/yanue/V2rayU/releases' }
    ],
    note: 'На M1/M2/M3 — ставь Happ из App Store. На Intel — V2RayU.'
  },
  {
    os: 'Windows',
    clients: [
      { name: 'v2rayN', store: 'https://github.com/2dust/v2rayN/releases' },
      { name: 'Hiddify Desktop', store: 'https://github.com/hiddify/hiddify-app/releases' }
    ],
    note: 'Распакуй архив, запусти exe, добавь подписку через «Серверы → Добавить из буфера».'
  },
  {
    os: 'Linux',
    clients: [
      { name: 'Nekoray', store: 'https://github.com/MatsuriDayo/nekoray/releases' },
      { name: 'sing-box', store: 'https://sing-box.sagernet.org/installation/' }
    ],
    note: 'Для CLI — sing-box. Для GUI — Nekoray (AppImage).'
  }
];

export default function Connect() {
  return (
    <section style={{ borderBottom: '1px solid var(--line-hairline)' }}>
      <div className="container">
        <div className="eyebrow">подключение</div>
        <h1 className="display h-section" style={{ fontWeight: 600, letterSpacing: '-0.035em', lineHeight: 1.0, margin: '14px 0 24px' }}>
          Установи клиент. Скопируй ссылку из бота. <span className="em">Готово.</span>
        </h1>
        <p className="lead-large" style={{ color: 'var(--fg-2)', lineHeight: 1.5, maxWidth: 720 }}>
          Подписка работает в любом VLESS/Xray-совместимом клиенте. Ниже — проверенные варианты для каждой платформы.
          Внутри бота есть deeplink-кнопки, которые добавляют подписку в один тап.
        </p>

        <div className="grid-2" style={{ marginTop: 56 }}>
          {platforms.map((p) => (
            <div key={p.os} style={{
              border: '1px solid var(--line-hairline)',
              borderRadius: 'var(--r-12)',
              padding: 28,
              background: 'var(--bg-surface)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 600, letterSpacing: '-0.025em' }}>{p.os}</h3>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-4)' }}>{p.clients.length} клиента</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '24px 0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {p.clients.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.store}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '12px 14px',
                        background: 'var(--bg-raised)',
                        border: '1px solid var(--line-hairline)',
                        borderRadius: 'var(--r-8)',
                        fontSize: 15, color: 'var(--fg-1)',
                        textDecoration: 'none'
                      }}
                    >
                      <span>{c.name}</span>
                      <span style={{ color: 'var(--accent)' }}>↗ установить</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p style={{ margin: 0, color: 'var(--fg-3)', fontSize: 14, lineHeight: 1.5 }}>{p.note}</p>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 56, padding: 28,
          background: 'var(--bg-raised)',
          border: '1px solid var(--line-hairline)',
          borderRadius: 'var(--r-12)'
        }}>
          <div className="eyebrow">не получилось?</div>
          <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.55, color: 'var(--fg-2)', maxWidth: 720 }}>
            Напиши в поддержку <a href="https://t.me/WhiteCrowSupport" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>@WhiteCrowSupport</a> —
            подскажем под конкретное устройство и провайдера. Медиана ответа 12 минут в рабочее время.
          </p>
        </div>
      </div>
    </section>
  );
}
