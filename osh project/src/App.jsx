import './App.css'

function LeafMark() {
  return (
    <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M32.5 7.5C20.8 7.6 10 11.9 10 22.2c0 5.3 4.1 8.3 8.7 8.3 10.1 0 13.8-11.6 13.8-23Z" fill="currentColor" />
      <path d="M7.5 32.5c4.4-7 9.3-11.4 17.1-15.5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  )
}

function OshIllustration() {
  return (
    <svg className="hero-art" viewBox="0 0 720 580" fill="none" role="img" aria-label="Зелёный город у подножия гор">
      <circle cx="522" cy="145" r="52" fill="#F2C978" />
      <path d="m0 335 128-157 75 82 110-157 155 232H0Z" fill="#9BAF83" />
      <path d="m257 335 144-205 176 205H257Z" fill="#738F6D" />
      <path d="m373 335 165-172 182 172H373Z" fill="#55785C" />
      <path d="m382 227 19-25 21 25-15-6-10 9-15-3Z" fill="#F5F1E5" />
      <path d="m506 207 31-33 34 35-22-9-13 12-30-5Z" fill="#F5F1E5" />
      <path d="M0 335c128-34 233-33 349 0 124 35 238 28 371-6v251H0V335Z" fill="#91AE72" />
      <path d="M0 406c135-48 233-23 344 9 132 38 242 28 376-22v187H0V406Z" fill="#71945F" />
      <path d="M279 580c47-106 82-145 139-207 39-41 88-67 130-83" stroke="#E8D9B6" strokeWidth="18" strokeLinecap="round" />
      <path d="M281 580c48-108 80-144 137-205 37-39 85-65 128-82" stroke="#F7F1DE" strokeWidth="5" strokeLinecap="round" />
      <g fill="#355B45">
        <path d="m102 409 28-86 29 86h-18v51h-21v-51h-18Z" />
        <path d="m166 431 24-73 25 73h-15v43h-19v-43h-15Z" />
        <path d="m588 384 31-96 32 96h-20v58h-23v-58h-20Z" />
        <path d="m646 414 24-74 25 74h-15v43h-19v-43h-15Z" />
      </g>
      <g fill="#E8D9B6">
        <path d="M39 373h40v42H39z" />
        <path d="M48 353h23v20H48z" />
        <path d="M46 387h9v12h-9zm17 0h9v12h-9z" fill="#71945F" />
        <path d="M221 382h33v34h-33z" />
        <path d="M229 363h17v19h-17z" />
        <path d="M228 393h7v10h-7zm13 0h7v10h-7z" fill="#71945F" />
      </g>
      <g fill="#E8D9B6">
        <path d="M486 342h5v20h-5zM476 350h25v4h-25z" />
        <path d="M455 380h5v20h-5zM445 388h25v4h-25z" />
      </g>
    </svg>
  )
}

const ideas = [
  {
    number: '01',
    title: 'Деревья рядом с домом',
    text: 'Тень во дворе, прохладнее летом и уютнее на знакомых улицах.',
    icon: 'tree',
  },
  {
    number: '02',
    title: 'Зелёные улицы',
    text: 'Больше деревьев и аккуратных клумб там, где мы ходим каждый день.',
    icon: 'sun',
  },
  {
    number: '03',
    title: 'Забота о саженцах',
    text: 'Посадить — только начало. Молодым деревьям нужны внимание и вода.',
    icon: 'water',
  },
]

function IdeaIcon({ name }) {
  if (name === 'tree') {
    return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 7 11 25h8L9 37h30L29 25h8L24 7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" /><path d="M24 31v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
  }
  if (name === 'sun') {
    return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="8" stroke="currentColor" strokeWidth="2" /><path d="M24 6v5m0 26v5M6 24h5m26 0h5M11.3 11.3l3.5 3.5m18.4 18.4 3.5 3.5m0-25.4-3.5 3.5m-18.4 18.4-3.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
  }
  return <svg viewBox="0 0 48 48" fill="none" aria-hidden="true"><path d="M24 6c-5.8 8.1-12 15.1-12 23a12 12 0 0 0 24 0c0-7.9-6.2-14.9-12-23Z" stroke="currentColor" strokeWidth="2" /><path d="M18 29c.4 3.2 2.4 5.2 5.5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
}

function App() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Ош — зелёный город, на главную">
          <span className="brand-mark"><LeafMark /></span>
          <span>Ош<span className="brand-light">.жашыл</span></span>
        </a>
        <nav className="navigation" aria-label="Основная навигация">
          <a href="#about">О проекте</a>
          <a href="#ideas">Идеи</a>
          <a className="nav-cta" href="#join">Присоединиться <span aria-hidden="true">↗</span></a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Инициатива жителей Оша</p>
          <h1>Ош становится<br /><span>зеленее.</span></h1>
          <p className="hero-description">Делаем Ош зеленее — дерево за деревом, двор за двором. Начать можно рядом с домом.</p>
          <a className="primary-button" href="#ideas">Посмотреть идеи <span aria-hidden="true">↘</span></a>
          <p className="hero-note"><span className="note-line" /> Маленькие шаги меняют город</p>
        </div>
        <div className="hero-visual">
          <OshIllustration />
          <div className="location-tag"><span className="location-dot" /> Ош, Кыргызстан</div>
          <div className="visual-caption"><span>01</span> Наш общий дом</div>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="section-label"><span>01</span><span className="label-rule" /> Зачем это нужно</div>
        <div className="intro-content">
          <h2>Больше зелени.<br /><span>Больше жизни.</span></h2>
          <p>Ош — город с большим сердцем и красивыми горами рядом. Давайте добавим зелени там, где живём, гуляем и встречаемся.</p>
        </div>
      </section>

      <section className="ideas-section" id="ideas">
        <div className="ideas-heading">
          <div>
            <div className="section-label"><span>02</span><span className="label-rule" /> С чего начать</div>
            <h2>Зелёный город<br />начинается <span>с нас.</span></h2>
          </div>
          <p>Не нужен большой план. Выбери то, что по силам — и сделай первый шаг.</p>
        </div>
        <div className="idea-grid">
          {ideas.map((idea) => (
            <article className="idea-card" key={idea.number}>
              <div className="card-top"><span className="idea-icon"><IdeaIcon name={idea.icon} /></span><span className="idea-number">{idea.number}</span></div>
              <h3>{idea.title}</h3>
              <p>{idea.text}</p>
              <span className="card-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="join-section" id="join">
        <div>
          <div className="section-label"><span>03</span><span className="label-rule" /> Твой следующий шаг</div>
          <h2>Начни с места,<br />которое <span>любишь.</span></h2>
        </div>
        <div className="join-message">
          <p>Оглянись вокруг: какой уголок Оша ты хотел(а) бы сделать зеленее? Расскажи об этом соседям — хорошая идея растёт, когда ею делятся.</p>
          <a className="join-link" href="#ideas">Выбрать идею <span aria-hidden="true">↗</span></a>
        </div>
        <LeafMark />
      </section>

      <footer className="site-footer">
        <a className="brand footer-brand" href="#home"><span className="brand-mark"><LeafMark /></span><span>Ош<span className="brand-light">.жашыл</span></span></a>
        <span>С любовью к городу и его природе.</span>
        <a href="#home" className="back-top">Наверх ↑</a>
      </footer>
    </main>
  )
}

export default App
