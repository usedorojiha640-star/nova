import React, { useEffect, useState } from 'react'
import { MANAGER_URL } from './config'

function Icon({ name, size = 20, className = '' }) {
  const shapes = {
    arrow: <><path d="M4 12h16M13 5l7 7-7 7"/></>,
    diagonal: <><path d="M5 19 19 5M9 5h10v10"/></>,
    chevron: <><path d="m6 9 6 6 6-6"/></>,
    plus: <><path d="M12 5v14M5 12h14"/></>,
    minus: <><path d="M5 12h14"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="M5 5 19 19M19 5 5 19"/></>,
    copy: <><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M16 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h3"/></>,
    check: <><path d="m4 12 5 5L20 7"/></>,
    globe: <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c4 5 4 13 0 18M12 3c-4 5-4 13 0 18"/></>,
    shield: <><path d="M12 2 20 6v6c0 5-3 8-8 10-5-2-8-5-8-10V6l8-4Z"/><path d="m9 12 2 2 4-4"/></>,
    bolt: <><path d="m13 2-9 12h7l-1 8 10-13h-7V2Z"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v6l4 2"/></>,
    location: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    spark: <><path d="m12 2 2.7 7.3L22 12l-7.3 2.7L12 22l-2.7-7.3L2 12l7.3-2.7L12 2Z"/></>,
    message: <><path d="M20 11a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.8L3 20l1.6-4.7A8 8 0 1 1 20 11Z"/><path d="M8 11h8"/></>,
    swap: <><path d="M5 7h14m-5-4 5 4-5 4M19 17H5m5-4-5 4 5 4"/></>,
  }
  return <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">{shapes[name] || shapes.arrow}</svg>
}

function Brand({ inverse = false }) {
  return <a className={`brand ${inverse ? 'brand--inverse' : ''}`} href="#top" aria-label="QuickX — наверх">
    <span className="brand__emblem" aria-hidden="true"><span className="brand__q">Q</span><span className="brand__x">X</span></span>
    <span className="brand__word">Quick<span>X</span><small>DIGITAL EXCHANGE</small></span>
  </a>
}

function ManagerLink({ children, className = '', appearance = 'primary', icon = true }) {
  return <a href={MANAGER_URL} className={`btn btn--${appearance} ${className}`} target="_blank" rel="noopener noreferrer">
    <span>{children}</span>{icon && <Icon name="diagonal" size={19}/ >}
  </a>
}

function Header() {
  const [opened, setOpened] = useState(false)
  useEffect(() => {
    const onKey = (event) => { if (event.key === 'Escape') setOpened(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])
  const nav = [['#benefits','Преимущества'],['#exchange','Направления'],['#process','Как работает'],['#reach','География'],['#faq','FAQ']]
  return <>
    <div className="topline"><div className="shell topline__inner"><span><span className="topline__dot"/> PRIVATE EXCHANGE NETWORK</span><span>УСЛОВИЯ СДЕЛКИ — В ЛИЧНОМ ДИАЛОГЕ</span><span>GLOBAL / 24·7</span></div></div>
    <header id="top" className="site-header">
      <div className="shell site-header__inner">
        <Brand />
        <nav className={`site-nav ${opened ? 'site-nav--open' : ''}`} id="quickx-nav" aria-label="Основное меню">
          {nav.map(([href,text]) => <a key={href} href={href} onClick={() => setOpened(false)}>{text}</a>)}
          <ManagerLink className="site-nav__mobile-cta">Связаться с менеджером</ManagerLink>
        </nav>
        <div className="site-header__actions"><span className="header-status"><i/> НА СВЯЗИ 24/7</span><ManagerLink className="site-header__cta" appearance="outline">Связаться</ManagerLink><button className="hamburger" aria-label={opened ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={opened} aria-controls="quickx-nav" type="button" onClick={() => setOpened(v=>!v)}><Icon name={opened?'close':'menu'} size={22}/></button></div>
      </div>
    </header>
  </>
}

function PortalVisual() {
  return <div className="portal" aria-label="Абстрактная светящаяся эмблема QuickX в кольцах" role="img">
    <div className="portal__space"/>
    <div className="portal__rays"/>
    <div className="portal__ring portal__ring--outer"/>
    <div className="portal__ring portal__ring--middle"/>
    <div className="portal__ring portal__ring--inner"/>
    <div className="portal__orb"><span className="portal__orb-reflection"/><span className="portal__orb-symbol">Q<span>X</span></span></div>
    <div className="portal__beam portal__beam--one"/>
    <div className="portal__beam portal__beam--two"/>
    <div className="portal__satellite portal__satellite--one"/>
    <div className="portal__satellite portal__satellite--two"/>
    <div className="float-chip float-chip--upper"><span className="float-chip__icon float-chip__icon--cyan"><Icon name="swap" size={18}/></span><span><b>CRYPTO ↔ CASH</b><small>Обмен в обе стороны</small></span></div>
    <div className="float-chip float-chip--lower"><span className="float-chip__pulse"/><span><b>PERSONAL SERVICE</b><small>Связь напрямую с менеджером</small></span><Icon name="diagonal" size={18}/></div>
    <span className="portal__serial">QX / 002 — WORLDWIDE</span>
    <span className="portal__cross portal__cross--one">✦</span><span className="portal__cross portal__cross--two">✧</span>
  </div>
}

function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <div className="hero__aurora"/>
    <div className="shell hero__grid">
      <div className="hero__copy reveal">
        <div className="kicker"><span className="kicker__line"/> QUICKX / NEXT LEVEL EXCHANGE <span className="kicker__index">001</span></div>
        <h1 id="hero-title">Обмен<br/>на другой<br/><span>скорости<span className="hero__period">.</span></span></h1>
        <p className="hero__lead">Криптовалюта ↔ наличные. Современный формат обмена с персональным сопровождением и понятными условиями до сделки.</p>
        <div className="hero__buttons"><ManagerLink>Получить актуальный курс</ManagerLink><a className="hero__secondary" href="#exchange">Выбрать направление <Icon name="arrow" size={19}/></a></div>
        <div className="hero__bottom-stats"><span><Icon name="globe" size={20}/> Международные запросы</span><span><Icon name="clock" size={20}/> 24/7 обращения</span><span><Icon name="shield" size={20}/> Условия заранее</span></div>
      </div>
      <div className="hero__art"><PortalVisual/></div>
    </div>
    <div className="hero__index"><span>SCROLL TO EXPLORE</span><span>↓</span></div>
  </section>
}

const tickerData = ['USDT','BITCOIN','ETHEREUM','PRIVATE EXCHANGE','QUICKX','WORLDWIDE','USDT','BITCOIN']
function Ticker() {
  return <div className="ticker" aria-label="Основные направления QuickX"><div className="ticker__track">{[...tickerData,...tickerData].map((t,i)=><span key={`${t}-${i}`}><b className="ticker__spark">✳</b>{t}</span>)}</div></div>
}

const assets = ['USDT','BTC','ETH']
function ExchangeDesk() {
  const [direction, setDirection] = useState('crypto-cash')
  const [asset, setAsset] = useState('USDT')
  const [city, setCity] = useState('')
  const [amount, setAmount] = useState('')
  const [status, setStatus] = useState('')
  const dirText = direction === 'crypto-cash' ? 'Криптовалюта → наличные' : 'Наличные → криптовалюта'
  const message = `Здравствуйте! Интересует обмен через QuickX.\nНаправление: ${dirText}\nАктив: ${asset}\nСумма: ${amount.trim() || 'уточню'}\nГород: ${city.trim() || 'уточню'}\nПодскажите актуальный курс, условия и доступность.`
  async function copyRequest() {
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable')
      await navigator.clipboard.writeText(message)
      setStatus('Запрос скопирован — вставьте его в чат менеджеру.')
    } catch {
      setStatus('Копирование недоступно в браузере. Запишите параметры перед обращением.')
    }
  }
  return <section className="desk-section" id="exchange">
    <div className="shell">
      <div className="desk-section__heading reveal"><div><p className="section-overline">02 / НАПРАВЛЕНИЯ ОБМЕНА</p><h2>Ваш запрос.<br/><em>Наше внимание.</em></h2></div><p>Выберите параметры — и обсудите курс напрямую с менеджером. Никаких вымышленных котировок на экране.</p></div>
      <div className="desk-shell reveal">
        <div className="desk-shell__intro"><span className="desk-shell__serial">QX SYSTEM <b> / </b> REQUEST</span><div className="desk-shell__glyph">✳</div><h3>Меньше действий.<br/><span>Больше ясности.</span></h3><p>Один запрос — и все условия обмена обсуждаются лично.</p><span className="desk-shell__foot">QUICKX / CONTACT TERMINAL — 01</span></div>
        <div className="desk-form">
          <div className="desk-form__header"><span className="desk-form__step">01 <b>/</b> 03</span><span className="desk-form__label">НАСТРОИТЬ ЗАПРОС</span><Icon name="spark" size={19}/></div>
          <label className="form-label">НАПРАВЛЕНИЕ</label>
          <div className="direction-options" role="group" aria-label="Направление обмена"><button type="button" className={direction==='crypto-cash'?'is-selected':''} onClick={()=>setDirection('crypto-cash')}>Крипта <Icon name="arrow" size={17}/> Наличные</button><button type="button" className={direction==='cash-crypto'?'is-selected':''} onClick={()=>setDirection('cash-crypto')}>Наличные <Icon name="arrow" size={17}/> Крипта</button></div>
          <label className="form-label">КРИПТОВАЛЮТА</label><div className="asset-options" role="group" aria-label="Выбор криптовалюты">{assets.map(a=><button type="button" key={a} className={asset===a?'is-selected':''} onClick={()=>setAsset(a)}><span className={`asset-mark asset-mark--${a.toLowerCase()}`}>{a==='BTC'?'₿':a==='ETH'?'◆':'₮'}</span>{a}</button>)}</div>
          <div className="desk-form__fields"><label><span className="form-label">СУММА (НЕОБЯЗАТЕЛЬНО)</span><input type="text" inputMode="decimal" value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Например, 5 000" maxLength={30}/></label><label><span className="form-label">ГОРОД</span><input type="text" value={city} onChange={e=>setCity(e.target.value)} placeholder="Укажите город" maxLength={80}/></label></div>
          <div className="desk-form__actions"><ManagerLink className="desk-form__contact">Обсудить курс</ManagerLink><button type="button" className="desk-form__copy" onClick={copyRequest} aria-label="Скопировать параметры запроса"><Icon name="copy" size={19}/> Скопировать запрос</button></div>
          <p role="status" className="desk-form__status">{status || 'Курс, комиссия и доступность уточняются до проведения сделки.'}</p>
        </div>
      </div>
    </div>
  </section>
}

function BenefitVisual({variant}) {
  if(variant==='private') return <div className="privacy-art" aria-hidden="true"><span className="privacy-art__halo"/><div className="privacy-art__shield"><Icon name="shield" size={76}/></div><span className="privacy-art__dash privacy-art__dash--a"/><span className="privacy-art__dash privacy-art__dash--b"/></div>
  if(variant==='speed') return <div className="speed-art" aria-hidden="true"><span>→</span><span>↗</span><span>→</span></div>
  return <div className="global-art" aria-hidden="true"><div className="global-art__disc"><Icon name="globe" size={95}/></div><i/><i/><i/></div>
}

function Benefits() {
  return <section className="benefits" id="benefits"><div className="shell">
    <div className="benefits__heading reveal"><div><p className="section-overline section-overline--dark">01 / ПОЧЕМУ QUICKX</p><h2>Всё по делу.<br/><span>Ничего лишнего.</span></h2></div><p>Простой путь от первого сообщения до согласованных условий. Продуманный опыт на каждом шаге.</p></div>
    <div className="benefits__grid">
      <article className="benefit benefit--main reveal"><div className="benefit__cap"><span>01 / ПЕРСОНАЛЬНО</span><Icon name="diagonal" size={20}/></div><h3>Диалог важнее<br/>формы.</h3><p>Задача обсуждается напрямую с менеджером — без ненужных экранов и сложных анкет.</p><div className="benefit__main-art" aria-hidden="true"><span className="benefit__art-ring"/><span className="benefit__art-word">Q<span>X</span></span><span className="benefit__art-ray"/></div></article>
      <article className="benefit benefit--privacy reveal"><div className="benefit__cap"><span>02 / КОНФИДЕНЦИАЛЬНО</span><Icon name="shield" size={20}/></div><BenefitVisual variant="private"/><h3>Бережно к деталям.</h3><p>Информация обсуждается в рамках персонального обращения.</p></article>
      <article className="benefit benefit--speed reveal"><div className="benefit__cap"><span>03 / БЕЗ ЛИШНИХ ШАГОВ</span><Icon name="bolt" size={20}/></div><BenefitVisual variant="speed"/><h3>Быстрее к сути.</h3><p>Вы сразу уточняете направление, сумму и возможные условия.</p></article>
      <article className="benefit benefit--global reveal"><div className="benefit__cap"><span>04 / МЕЖДУНАРОДНО</span><Icon name="globe" size={20}/></div><BenefitVisual variant="global"/><h3>География шире.</h3><p>Обращения из разных стран. Доступность в городе подтверждает менеджер.</p></article>
    </div>
  </div></section>
}

const phases = [
  {n:'01',title:'Выберите',body:'Направление, криптовалюту и желаемую сумму.'},
  {n:'02',title:'Уточните',body:'Напишите менеджеру и согласуйте курс, комиссии и доступность.'},
  {n:'03',title:'Согласуйте',body:'Ознакомьтесь с порядком расчёта до подтверждения операции.'},
]
function Process() {
  return <section className="process" id="process"><div className="shell"><div className="process__heading reveal"><span className="section-overline">03 / КАК ЭТО РАБОТАЕТ</span><h2>Три шага.<br/><em>Один результат.</em></h2><p>Всё начинается с понятного запроса. Никаких скрытых операций на сайте.</p></div><div className="process__steps">{phases.map(({n,title,body})=><div className="phase reveal" key={n}><span className="phase__num">{n}</span><div className="phase__bar"/><h3>{title}<span>.</span></h3><p>{body}</p></div>)}</div><div className="process__bottom"><span>QUICKX / SIMPLE BY DESIGN</span><ManagerLink appearance="text">Начать обмен</ManagerLink></div></div></section>
}

function NetworkVisual() {
  return <div className="network-art" aria-label="Стилизованная глобальная сеть, без указания фактических офисов" role="img">
    <svg viewBox="0 0 780 405" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><linearGradient id="mapGradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#7cb9ff" stopOpacity=".55"/><stop offset="1" stopColor="#55f8ec" stopOpacity=".2"/></linearGradient></defs>
    <g fill="url(#mapGradient)" opacity=".80">
      <path d="M73 104 108 78 156 72 182 87 211 101 199 120 175 122 169 145 134 151 112 179 87 173 73 151 55 132Z"/>
      <path d="M187 185 218 199 236 237 233 285 207 340 183 361 167 335 173 288 157 257 166 221Z"/>
      <path d="M331 100 363 88 386 102 397 132 378 147 385 179 365 222 342 198 338 155 321 132Z"/>
      <path d="M392 90 456 68 497 77 543 91 589 83 631 109 667 130 656 149 611 156 575 171 548 155 511 179 480 157 451 170 425 148 394 139Z"/>
      <path d="M472 178 504 198 518 238 498 267 482 258 471 218 450 195Z"/>
      <path d="M599 267 641 261 679 284 692 317 670 337 635 331 600 305Z"/>
      <path d="M256 58 292 49 301 73 280 89 262 81Z"/>
    </g><g fill="none" stroke="#a7ddff" strokeWidth="1" opacity=".21"><path d="M25 202H750M25 112H750M25 292H750M195 30V380M390 30V380M585 30V380"/><ellipse cx="390" cy="203" rx="342" ry="156"/><ellipse cx="390" cy="203" rx="342" ry="156" transform="rotate(15 390 203)"/></g>
    <g fill="none" stroke="#46efe7" strokeWidth="2" strokeDasharray="4 7" opacity=".7"><path d="M130 145Q265 -8 371 127"/><path d="M371 127Q473 55 560 165"/><path d="M560 165Q645 163 652 287"/><path d="M130 145Q290 310 560 165"/></g>
    {[[130,145],[371,127],[560,165],[652,287],[442,192]].map(([x,y],i)=><g key={i}><circle cx={x} cy={y} r="15" fill="#26eff0" opacity=".12"/><circle cx={x} cy={y} r="6" fill="#6effef" stroke="#fff" strokeWidth="2"/></g>)}
    </svg>
    <span className="network-art__meta">CONNECTIONS / CONCEPTUAL VISUALIZATION</span><span className="network-art__badge"><Icon name="globe" size={18}/> WORLDWIDE ENQUIRIES</span>
  </div>
}
function Reach() {
  return <section className="reach" id="reach"><div className="shell reach__grid"><div className="reach__copy reveal"><p className="section-overline">04 / ГЕОГРАФИЯ</p><h2>Мир большой.<br/><span>Диалог близко.</span></h2><p>QuickX принимает международные обращения. Возможность конкретного обмена и наличие офиса в вашем городе необходимо заранее уточнять у менеджера.</p><ManagerLink appearance="outline">Уточнить свой город</ManagerLink></div><NetworkVisual/></div></section>
}

const questions = [
 ['Как узнать актуальный курс?', 'Напишите менеджеру с направлением обмена, криптовалютой и суммой. Курс, комиссии и порядок расчёта согласуются до операции.'],
 ['Можно ли обменять наличные на криптовалюту?', 'Можно отправить запрос в обе стороны: криптовалюта → наличные и наличные → криптовалюта. Доступность зависит от города, суммы и валюты.'],
 ['Есть ли офис QuickX в моём городе?', 'Наличие офиса или возможность личной встречи нужно уточнять у менеджера. Иллюстрация глобальной сети на сайте не является списком действующих офисов.'],
 ['Какие криптовалюты поддерживаются?', 'Можно направить запрос по USDT, BTC и ETH. Другие активы и сети уточняйте индивидуально.'],
 ['Сервис работает круглосуточно?', 'Запрос можно отправить 24/7. Фактическое время ответа менеджера и проведения операции зависит от доступности обслуживания.'],
 ['Нужна ли идентификация?', 'Это зависит от страны, размера и характера операции и применимых требований. Обязательные условия сообщаются заранее.'],
]
function FAQ() {
  const [active,setActive] = useState(null)
  return <section className="faq" id="faq"><div className="shell faq__grid"><div className="faq__intro reveal"><p className="section-overline section-overline--dark">05 / ВАЖНО ЗНАТЬ</p><h2>Частые<br/>вопросы<span>.</span></h2><p>Коротко о том, как устроено взаимодействие с QuickX.</p><ManagerLink appearance="ink">Задать свой вопрос</ManagerLink></div><div className="faq__list">{questions.map(([q,a],i)=><div key={q} className={`faq__item ${active===i?'faq__item--active':''}`}><button type="button" aria-expanded={active===i} onClick={()=>setActive(active===i?null:i)}><span className="faq__num">0{i+1}</span><span className="faq__q">{q}</span><span className="faq__toggle"><Icon name={active===i?'minus':'plus'} size={20}/></span></button>{active===i && <p>{a}</p>}</div>)}</div></div></section>
}

function Closing() {return <section className="closing" id="contact"><div className="shell closing__inner"><div className="closing__star" aria-hidden="true">✳</div><p className="closing__eyebrow">QUICKX / YOUR MOVE</p><h2>Договоримся<br/><em>о главном.</em></h2><p>Расскажите, что хотите обменять — менеджер уточнит доступные условия.</p><ManagerLink appearance="white">Связаться с менеджером</ManagerLink><span className="closing__signature">ONE CONVERSATION. CLEAR NEXT STEPS.</span></div></section>}

function Footer() {return <footer className="footer"><div className="shell footer__inner"><Brand inverse/><div className="footer__middle"><span>USDT · BTC · ETH</span><span>Наличные ↔ криптовалюта</span><span>© {new Date().getFullYear()} QuickX</span></div><div className="footer__right"><a href="#top">Наверх ↑</a><p>Информация на сайте ознакомительная. Доступность, курс и условия уточняйте у менеджера.</p></div></div></footer>}

function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {items.forEach(el=>el.classList.add('is-visible'));return}
    const observer = new IntersectionObserver(entries => entries.forEach(e=> {if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}}),{threshold:.08,rootMargin:'0px 0px -30px 0px'})
    items.forEach(el=>observer.observe(el))
    return ()=>observer.disconnect()
  }, [])
  return <><Header/><main><Hero/><Ticker/><ExchangeDesk/><Benefits/><Process/><Reach/><FAQ/><Closing/></main><Footer/></>
}

export default App
