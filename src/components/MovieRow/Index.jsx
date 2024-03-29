import React, { useState } from 'react';
import './MovieRow.css';
import '../../utils/tmdb'

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, item }) => {

  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = item.results.length * 150;

    if ((window.innerWidth - listW) > x) {
      x = (window.innerWidth - listW) - 60;
    }
    setScrollX(x);
  }

  return (
    <div className="movieRow">
      <h2>{title}</h2>

      <div className="moviewRow--left" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{fontSize: 50}} />
      </div>
      <div className="moviewRow--right"  onClick={handleRightArrow}>
        <NavigateNextIcon style={{fontSize: 50}} />
      </div>

      <div className="movieRow--listarea">
        <div className="movieRow--list" style={{
          marginLeft: scrollX,
          width: item.results.length * 150
        }}>
          {item.results.length > 0 && item.results.map((item, key) => (
            <div key={key} className='movieRow--item'>
              <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
