import type { FC } from 'react';
import { Helmet } from '@tokopedia/skipper/head';
import { containerCx, bodyCx, titleCx, descriptionCx, textCx } from './styles';

/**
 * @description Custom 404 page
 * @function NotFound
 */
const NotFound: FC<unknown> = () => {
  return (
    <div className={containerCx}>
      <Helmet>
        <title>404 - Page Not Found</title>
        <meta key="robots" name="robots" content="noindex,nofollow" />
      </Helmet>
      <div className={bodyCx}>
        <h1 className={titleCx}>404</h1>
        <div className={descriptionCx}>
          <h2 className={textCx}>Custom Page Not Found.</h2>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
