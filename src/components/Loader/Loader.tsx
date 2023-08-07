import './Loader.css';
import { FC } from 'react';
import loader1 from '../../images/loader12.svg';
import loader2 from '../../images/loader2.svg';

export const Loader: FC = () => {
  return (
    <div className="loader">
      <div className="loader__img" />
      <div className="loader__img_plus" />
    </div>
  );
};
