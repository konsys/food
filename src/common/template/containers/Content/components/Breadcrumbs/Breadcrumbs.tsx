import { useStore } from 'effector-react';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { $breadcrumsStore } from '../../../../../../modules/breadcrumbs/model';
import './breadcrumbs.less';

function Breadcrumbs() {
  const breadcrumbs = useStore($breadcrumsStore);

  console.log(11111111111, breadcrumbs);
  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="list-clear">
          {breadcrumbs?.length &&
            breadcrumbs.map(({ title, path }) => (
              <li>
                <Link to={path} title={title}>
                  <span>{title}</span>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default memo(Breadcrumbs);
