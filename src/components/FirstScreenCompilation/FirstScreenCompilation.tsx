import './FirstScreenCompilation.css'
import { Link } from 'react-router-dom';

export default function FirstScreenCompilation() {
  return (
    <section className="first-screen-compilation">
      <div className="movie">
        <p className="movie__name">Переводчик</p>
        <div className="movie__score">
          <div className="movie__score_type_kp">
            <div className="score-icon_type_kp"></div>
            <p className="score-text">7.9</p>
          </div>
          <div className="movie__score_type_imdb">
            <div className="score-icon_type_imdb"></div>
            <p className="score-text">7.5</p>
          </div>
        </div>
        <p className="movie__description">
          Афганистан, март 2018 года. Во время спецоперации по поиску оружия талибов отряд сержанта армии США Джона Кинли попадает в засаду. В живых остаются...
        </p>
        <div className='button-wraper'>
          <Link to="/movie-page" className="movie__more-detailed">Подробнее</Link>
          <button className='movie__bookmark'></button>
        </div>
      </div>
    </section>
  );
}