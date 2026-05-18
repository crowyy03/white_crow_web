import { Link } from 'react-router-dom';

const BOT_URL = 'https://t.me/white_crow_vpn_bot';

const Eb = ({ children, color, style = {} }) => (
  <span className="eyebrow" style={{ color: color || 'var(--fg-3)', ...style }}>{children}</span>
);

const Pill = ({ children, tone = 'soft', style = {} }) => {
  const styles = {
    soft: { background: 'var(--bg-surface)', color: 'var(--fg-2)', border: '1px solid var(--line-hairline)' },
    accent: { background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid transparent' },
    ink: { background: 'var(--bg-inverse)', color: 'var(--bg-page)', border: '1px solid transparent' }
  }[tone] || {};
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 10px', borderRadius: 999,
      fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.04em',
      ...styles, ...style
    }}>{children}</span>
  );
};

const Dot = ({ color = 'var(--accent)' }) => (
  <span style={{ width: 6, height: 6, borderRadius: 999, background: color, display: 'inline-block' }} />
);

function Hero() {
  return (
    <section style={{ borderBottom: '1px solid var(--line-hairline)' }}>
      <div className="container" style={{ position: 'relative' }}>
        <div className="grid-hero">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 28, flexWrap: 'wrap' }}>
              <Pill tone="accent">● в работе</Pill>
              <Pill>RU · NL · DE серверы</Pill>
              <Pill>VLESS · Reality</Pill>
            </div>

            <h1 className="display h-display" style={{
              fontWeight: 700, margin: 0,
              color: 'var(--fg-1)', textWrap: 'balance'
            }}>
              Плати <span className="em">по&nbsp;дням,</span><br />
              не на годы вперёд.
            </h1>

            <p className="lead" style={{
              marginTop: 32, lineHeight: 1.45,
              color: 'var(--fg-2)', maxWidth: 560, textWrap: 'pretty'
            }}>
              VPN без подписок и автосписаний с карты. Пополняешь баланс — каждый день&nbsp;уходит&nbsp;
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86em', color: 'var(--fg-1)' }}>7&nbsp;₽</span>.
              Деньги кончились — VPN ждёт. Снова положил — снова летаешь.
            </p>

            <div style={{ marginTop: 40, display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
              <a
                href={BOT_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'var(--accent)', color: '#fff', border: 0,
                  padding: '18px 28px', borderRadius: 'var(--r-8)',
                  fontSize: 16, fontWeight: 500, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  boxShadow: 'var(--shadow-1)'
                }}
              >
                <span>Открыть бота в Telegram</span>
                <span style={{ opacity: 0.8 }}>→</span>
              </a>
              <a
                href={BOT_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  background: 'transparent', border: '1px solid var(--line-default)',
                  color: 'var(--fg-1)', padding: '18px 24px', borderRadius: 'var(--r-8)',
                  fontSize: 16, textDecoration: 'none'
                }}
              >3 дня бесплатно</a>
            </div>

            <div style={{ marginTop: 28, display: 'flex', alignItems: 'center', gap: 24, fontSize: 13, color: 'var(--fg-3)', flexWrap: 'wrap' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Dot color="var(--positive)" /> работает в РФ
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Dot color="var(--positive)" /> карта · СБП · USDT
              </span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Dot color="var(--positive)" /> без лимита трафика
              </span>
            </div>
          </div>

          <div className="crow-stage">
            <div className="crow-glow" />
            <div className="crow-img-wrap">
              <img src="/assets/crow.png" alt="Белая ворона" />
            </div>
          </div>
        </div>

        <div className="grid-stats" style={{
          marginTop: 80, borderTop: '1px solid var(--line-hairline)', paddingTop: 32
        }}>
          {[
            { lbl: 'тариф solo', val: '7 ₽', sub: '/ сутки · 1 устройство' },
            { lbl: 'тариф family', val: '14 ₽', sub: '/ сутки · до 5 устройств' },
            { lbl: 'минимальный платёж', val: '100 ₽', sub: '≈ 14 дней solo' },
            { lbl: 'триал', val: '3 дня', sub: 'без карты, навсегда' }
          ].map((c, i) => (
            <div key={i} className="stat-cell" style={{
              padding: '0 24px',
              borderLeft: i === 0 ? 0 : '1px solid var(--line-hairline)'
            }}>
              <Eb>{c.lbl}</Eb>
              <div className="h-price" style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                letterSpacing: '-0.04em', lineHeight: 1, marginTop: 8
              }}>{c.val}</div>
              <div style={{ marginTop: 6, fontSize: 13, color: 'var(--fg-3)' }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: '01', title: 'Пополни баланс', body: 'От 100 ₽. Картой РФ, СБП или криптой. Лежит на твоём счёте — никто никогда не спишет лишнего.', meta: '~ 30 сек' },
    { num: '02', title: 'Каждые сутки в 00:00 уходит дневная ставка', body: 'Solo — 7 ₽, Family — 14 ₽. Видишь каждое списание в боте. Хочешь паузу — просто не пополняй.', meta: 'cron · мск' },
    { num: '03', title: 'Кончился баланс — VPN ждёт', body: 'Без угроз про «удалим аккаунт». Положишь снова — соединение поднимется через минуту, без перенастройки клиента.', meta: 'auto-resume' }
  ];
  return (
    <section id="how" style={{ borderBottom: '1px solid var(--line-hairline)' }}>
      <div className="container">
        <div className="row-between" style={{ marginBottom: 64 }}>
          <div>
            <Eb>как работает</Eb>
            <h2 className="display h-section" style={{ fontWeight: 600, margin: '14px 0 0', maxWidth: 720, textWrap: 'balance' }}>
              Тарифа в привычном смысле — <span className="em">нет</span>. Есть баланс и дневная ставка.
            </h2>
          </div>
          <div style={{ fontSize: 14, color: 'var(--fg-3)', maxWidth: 280 }}>
            Без подписок Apple/Google.<br />
            Без автосписаний с карты.<br />
            Без «попробуй бесплатно — оплатишь автоматически».
          </div>
        </div>

        <div className="grid-3" style={{
          border: '1px solid var(--line-hairline)', borderRadius: 'var(--r-12)',
          overflow: 'hidden', background: 'var(--bg-surface)'
        }}>
          {steps.map((s, i) => (
            <div key={s.num} style={{
              padding: 32,
              borderRight: i < steps.length - 1 ? '1px solid var(--line-hairline)' : 0,
              minHeight: 320, display: 'flex', flexDirection: 'column'
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em' }}>{s.num}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-4)' }}>{s.meta}</span>
              </div>
              <h3 className="h-step" style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                letterSpacing: '-0.025em', lineHeight: 1.1, margin: '32px 0 16px',
                textWrap: 'balance', color: 'var(--fg-1)'
              }}>{s.title}</h3>
              <p style={{ color: 'var(--fg-2)', fontSize: 16, lineHeight: 1.5, margin: 0, flex: 1 }}>{s.body}</p>
              <div style={{ marginTop: 24, height: 1, background: 'var(--line-hairline)' }} />
              <div style={{ marginTop: 16, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-4)' }}>
                step {s.num} / 03
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      key: 'solo', name: 'Solo', day: '7 ₽', mo: '~ 213 ₽ / мес', devices: '1 устройство',
      features: ['Без лимита трафика', 'Серверы DE · NL', 'VLESS Reality, Vless XTLS', 'Подключение по подписке', 'Деплоинки Happ / v2rayNG / Streisand'],
      cta: 'Начать с 100 ₽', accent: false
    },
    {
      key: 'family', name: 'Family', day: '14 ₽', mo: '~ 427 ₽ / мес', devices: 'до 5 устройств',
      features: ['Всё из Solo', 'iPhone + ноут + Apple TV + два роутера — в один счёт', 'Лимит привязанных устройств: 5', 'Сменить тариф — мгновенно, без потери баланса', 'Реферальная программа: 20% с пополнений'],
      cta: 'Семейный счёт', accent: true
    }
  ];
  return (
    <section id="pricing" style={{ borderBottom: '1px solid var(--line-hairline)', background: 'var(--bg-sunken)' }}>
      <div className="container">
        <div style={{ marginBottom: 56 }}>
          <Eb>тарифы</Eb>
          <h2 className="display h-section" style={{ fontWeight: 600, margin: '14px 0 0', textWrap: 'balance' }}>
            Два варианта — по числу устройств.<br />
            <span className="em">Всё остальное</span> одинаково.
          </h2>
        </div>

        <div className="grid-2">
          {plans.map((p) => (
            <div key={p.key} style={{
              background: p.accent ? 'var(--bg-inverse)' : 'var(--bg-raised)',
              color: p.accent ? 'var(--bg-page)' : 'var(--fg-1)',
              border: '1px solid var(--line-hairline)',
              borderRadius: 'var(--r-12)',
              padding: 40,
              position: 'relative', overflow: 'hidden'
            }}>
              {p.accent && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  fontFamily: 'var(--font-mono)', fontSize: 10,
                  color: 'var(--accent)', letterSpacing: '0.1em'
                }}>● популярный</div>
              )}
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 12, flexWrap: 'wrap' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(28px, 3.2vw, 36px)',
                  letterSpacing: '-0.03em', margin: 0
                }}>{p.name}</h3>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: 11,
                  color: p.accent ? 'color-mix(in srgb, var(--bg-page) 60%, transparent)' : 'var(--fg-3)',
                  letterSpacing: '0.06em'
                }}>{p.devices}</div>
              </div>

              <div style={{ marginTop: 32, display: 'flex', alignItems: 'baseline', gap: 8 }}>
                <span className="display h-price" style={{ fontWeight: 700, lineHeight: 0.9 }}>{p.day}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: p.accent ? 'color-mix(in srgb, var(--bg-page) 60%, transparent)' : 'var(--fg-3)' }}>/ сутки</span>
              </div>
              <div style={{ marginTop: 6, fontSize: 14, color: p.accent ? 'color-mix(in srgb, var(--bg-page) 60%, transparent)' : 'var(--fg-3)' }}>{p.mo}</div>

              <hr style={{ border: 0, height: 1, background: p.accent ? 'color-mix(in srgb, var(--bg-page) 18%, transparent)' : 'var(--line-hairline)', margin: '32px 0' }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.features.map((f, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 15, lineHeight: 1.45, color: p.accent ? 'color-mix(in srgb, var(--bg-page) 90%, transparent)' : 'var(--fg-1)' }}>
                    <span style={{ color: 'var(--accent)', marginTop: 1 }}>→</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={BOT_URL}
                target="_blank"
                rel="noreferrer"
                style={{
                  marginTop: 40, width: '100%', display: 'block', textAlign: 'center',
                  background: p.accent ? 'var(--accent)' : 'var(--fg-1)',
                  color: p.accent ? '#fff' : 'var(--bg-page)',
                  border: 0, padding: '16px 24px', borderRadius: 'var(--r-8)',
                  fontSize: 15, fontWeight: 500, textDecoration: 'none', boxSizing: 'border-box'
                }}
              >{p.cta} →</a>
            </div>
          ))}
        </div>

        <div className="grid-legal" style={{
          marginTop: 32, padding: '20px 28px', background: 'var(--bg-raised)',
          border: '1px solid var(--line-hairline)', borderRadius: 'var(--r-8)',
          fontSize: 14, color: 'var(--fg-2)', alignItems: 'center'
        }}>
          <span>Стоимость указана в российских рублях. НДС не облагается (УСН).</span>
          <span className="mono" style={{ color: 'var(--fg-3)', textAlign: 'right' }}>обновлено 18.05.2026</span>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    { title: 'Дневная плата вместо подписки', body: 'Уехал на месяц без интернета — баланс просто стоит. Вернулся, продолжил. Никто не списал «годовую» вперёд.' },
    { title: 'Серверы в DE и NL', body: 'Не на американском Amazon. Хостинг в Европе, юридически отдельный от РФ. Балансировка между Frankfurt и Amsterdam — автоматически.' },
    { title: 'Современные протоколы', body: 'VLESS · Reality · XTLS. Маскировка под обычный TLS. Работает там, где OpenVPN и WireGuard заблокированы.' },
    { title: 'Без передачи данных третьим лицам', body: 'Платим Lava и CryptoBot за приём денег. Ничего о вашем трафике им не передаём — потому что сами не пишем логи.' },
    { title: 'Поддержка живым человеком', body: 'В рабочее время — медиана ответа 12 минут. Не чат-бот.' },
    { title: 'Реферальная программа', body: '20% с каждого пополнения друга — на ваш баланс. Не «потом, когда выведете 10 000 ₽» — сразу, в дни.' }
  ];
  return (
    <section id="why" style={{ borderBottom: '1px solid var(--line-hairline)' }}>
      <div className="container">
        <div className="row-between" style={{ marginBottom: 64 }}>
          <div>
            <Eb>почему мы</Eb>
            <h2 className="display h-section" style={{ fontWeight: 600, margin: '14px 0 0', maxWidth: 800, textWrap: 'balance' }}>
              Шесть причин выбрать <span className="em">белую</span> ворону
            </h2>
          </div>
        </div>

        <div className="grid-3" style={{ borderTop: '1px solid var(--line-hairline)' }}>
          {points.map((p, i) => (
            <div key={i} className="why-cell" style={{
              padding: 32,
              borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--line-hairline)' : 0,
              borderBottom: i < 3 ? '1px solid var(--line-hairline)' : 0,
              minHeight: 220
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 16 }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--accent)', letterSpacing: '0.08em', marginTop: 6 }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 className="h-card" style={{
                  fontFamily: 'var(--font-display)', fontWeight: 600,
                  letterSpacing: '-0.02em', lineHeight: 1.2, margin: 0, color: 'var(--fg-1)',
                  textWrap: 'balance'
                }}>{p.title}</h3>
              </div>
              <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.5, margin: 0, paddingLeft: 32 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const qs = [
    { q: 'Что будет, если кончится баланс посреди дня?', a: 'Списание происходит раз в сутки в 00:00 МСК. Если на счёте меньше дневной ставки в этот момент — VPN отключится. За три дня и за день до этого приходит предупреждение в бот.' },
    { q: 'Можно ли вернуть деньги с баланса?', a: 'Да. Напишите в поддержку — вернём остаток на способ оплаты в течение 3 рабочих дней. Минимум, ограничений по сроку нет.' },
    { q: 'Где серверы?', a: 'Frankfurt (Германия) и Amsterdam (Нидерланды). Hetzner и Leaseweb. Сервер выбирается автоматически по нагрузке — переключаться вручную не нужно.' },
    { q: 'Какой протокол используется?', a: 'VLESS поверх TLS с Reality и XTLS — маскируется под обычный HTTPS, поэтому работает в сетях, где блокированы OpenVPN, WireGuard и базовый Shadowsocks.' },
    { q: 'Какие клиенты поддерживаются?', a: 'iOS — Happ, Streisand, V2Box. Android — v2rayNG, NekoBox, Hiddify. macOS — Happ, V2RayU. Windows — v2rayN, Hiddify. Linux — Nekoray, sing-box. В боте — деплинки на каждый.' },
    { q: 'Я могу купить подписку на год сразу?', a: 'Нет. Это сознательное решение: годовая подписка ставит вам ловушку забвения. Положите 2 555 ₽ — будет год Solo. Положите 5 110 ₽ — будет год Family. То же самое, но без обязательств.' }
  ];
  return (
    <section id="faq" style={{ borderBottom: '1px solid var(--line-hairline)' }}>
      <div className="container">
        <div className="grid-faq">
          <div className="faq-side" style={{ position: 'sticky', top: 80 }}>
            <Eb>часто спрашивают</Eb>
            <h2 className="display h-section-sm" style={{ fontWeight: 600, margin: '14px 0 24px', textWrap: 'balance' }}>
              Шесть <span className="em">прямых</span> ответов
            </h2>
            <p style={{ color: 'var(--fg-2)', fontSize: 15, lineHeight: 1.5 }}>
              Не нашли свой вопрос? Напишите в поддержку — отвечает живой человек, в среднем за 12 минут.
            </p>
            <a
              href="https://t.me/WhiteCrowSupport"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'block', marginTop: 24, padding: 16, background: 'var(--bg-surface)', border: '1px solid var(--line-hairline)', borderRadius: 'var(--r-8)', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent)', textDecoration: 'none' }}
            >
              → @WhiteCrowSupport
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--line-hairline)' }}>
            {qs.map((item, i) => (
              <div key={i} style={{ padding: '28px 0', borderBottom: '1px solid var(--line-hairline)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 24 }}>
                  <div style={{ flex: 1 }}>
                    <div className="h-card" style={{
                      fontFamily: 'var(--font-display)', fontWeight: 500,
                      letterSpacing: '-0.02em', lineHeight: 1.25, color: 'var(--fg-1)',
                      textWrap: 'balance'
                    }}>{item.q}</div>
                    <p style={{ marginTop: 14, color: 'var(--fg-2)', fontSize: 16, lineHeight: 1.55, textWrap: 'pretty' }}>{item.a}</p>
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--fg-4)', letterSpacing: '0.08em', flexShrink: 0, marginTop: 8 }}>
                    {String(i + 1).padStart(2, '0')} / 06
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section style={{ background: 'var(--bg-inverse)', color: 'var(--bg-page)', borderBottom: '1px solid var(--line-default)' }}>
      <div className="container" style={{ textAlign: 'center', padding: 'clamp(72px, 10vw, 120px) 40px' }}>
        <Eb color="color-mix(in srgb, var(--bg-page) 50%, transparent)">готов?</Eb>
        <h2 className="display h-cta" style={{
          fontWeight: 700, margin: '24px auto 32px',
          color: 'var(--bg-page)', maxWidth: 1000, textWrap: 'balance'
        }}>
          Открой бота. Получи <span className="em" style={{ color: 'var(--accent)' }}>3 дня</span> на пробу.
        </h2>
        <p className="lead-large" style={{ color: 'color-mix(in srgb, var(--bg-page) 70%, transparent)', maxWidth: 600, margin: '0 auto 48px', lineHeight: 1.5 }}>
          Без карты. Без подписки. Закончится триал — пополнишь баланс или просто закроешь приложение.
        </p>
        <div style={{ display: 'inline-flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <a
            href={BOT_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              background: 'var(--accent)', color: '#fff', border: 0,
              padding: '20px 36px', borderRadius: 'var(--r-8)',
              fontSize: 17, fontWeight: 500, textDecoration: 'none',
              display: 'inline-flex', alignItems: 'center', gap: 12
            }}
          >
            <span>Открыть @white_crow_vpn_bot</span><span>→</span>
          </a>
          <Link
            to="/connect"
            style={{
              background: 'transparent', color: 'var(--bg-page)',
              border: '1px solid color-mix(in srgb, var(--bg-page) 25%, transparent)',
              padding: '20px 28px', borderRadius: 'var(--r-8)',
              fontSize: 17, textDecoration: 'none'
            }}
          >Инструкции по подключению</Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <PricingSection />
      <WhyUs />
      <FAQSection />
      <FinalCTA />
    </>
  );
}
