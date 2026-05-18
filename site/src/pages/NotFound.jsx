import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="doc" style={{ textAlign: 'center', paddingTop: 120 }}>
      <div className="meta">404</div>
      <h1>Страница не найдена</h1>
      <p>
        Похоже, такой страницы здесь нет. Возвращайся <Link to="/">на главную</Link> или
        напиши в <a href="https://t.me/WhiteCrowSupport" target="_blank" rel="noreferrer">поддержку</a>.
      </p>
    </div>
  );
}
