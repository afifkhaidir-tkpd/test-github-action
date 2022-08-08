import type { FC, ReactNode } from 'react';
import { Link } from '@tokopedia/skipper/router';
import { headerCx, floatHeaderCx, wrapperCx, brandCx, logoCx, titleCx, navItemCx } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

/**
 * @function Header
 */
const Header: FC<HeaderProps> = props => {
  const { children = null } = props;

  return (
    <header className={headerCx}>
      <div className={floatHeaderCx}>
        <div className={wrapperCx}>
          <Link className={brandCx} to="/">
            <img
              className={logoCx}
              alt="logo"
              src="https://ecs7.tokopedia.net/assets-tokopedia-lite/prod/media/icons/icon144.png"
            />
            <span className={titleCx}>Skipper</span>
          </Link>
          <div className={navItemCx}>{children}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
