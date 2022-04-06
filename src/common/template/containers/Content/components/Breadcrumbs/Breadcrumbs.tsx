import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import './breadcrumbs.less';

interface Props {}

function Breadcrumbs(props: Props) {
  const {} = props;

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="list-clear">
          <li>
            <Link to="/" title="Главная">
              <span>Главная</span>
            </Link>
          </li>
          <li>
            <a href="/" title="Нижний Новгород" className="disabled">
              <span>Москва</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default memo(Breadcrumbs);
