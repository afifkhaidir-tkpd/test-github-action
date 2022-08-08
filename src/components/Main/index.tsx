import type { FC } from 'react';
import { mainCx } from './styles';
import { MainProps } from './types';

/**
 * @function Main
 */
const Main: FC<MainProps> = ({ children }) => {
  return <div className={mainCx}>{children}</div>;
};

export default Main;
