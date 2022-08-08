import { useState } from 'react';
import { Helmet } from '@tokopedia/skipper/head';
import type { SkipperComponentType } from '@tokopedia/skipper/router';
import { trackerPushAction, trackerPushObject } from '@tokopedia/lite-tracker/dist/utils/tracker';

import Main from '@/components/Main';
import { mainCx, titleCx, descriptionCx, codeCx, btnPrimary, btnSecondaryCx } from './styles';

/**
 * @function Home
 */
const Home: SkipperComponentType = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    trackerPushAction({
      action: 'click button',
      moduleName: 'homepage',
      step: 'attempt',
      additionalData: { count },
    });
    trackerPushObject({
      event: 'click button',
      eventCategory: 'homepage button',
      eventAction: 'do click button',
    });

    setCount(c => {
      const response = c + 1;

      trackerPushAction({
        action: 'click button',
        moduleName: 'homepage',
        step: 'success',
        additionalData: { count: response },
      });

      return response;
    });
  };

  const handleDecrement = () => {
    setCount(c => {
      const response = c - 1;
      return response;
    });
  };

  return (
    <Main>
      <Helmet>
        <title>Home | Skipper Framework</title>
      </Helmet>
      <main className={mainCx}>
        <h1 className={titleCx}>Welcome to Skipper Framework!</h1>
        <p className={descriptionCx}>
          Get started by editing <br />
          <code className={codeCx}>routes/Home/index.tsx</code>
        </p>

        <div data-testid="count" style={{ fontSize: '1.5rem', marginTop: '.5em' }}>
          Count: {count}
        </div>

        <div style={{ display: 'flex', gap: '10px', marginTop: '1em' }}>
          <button onClick={handleIncrement} type="button" className={btnPrimary} data-testid="btnPlus">
            Plus
          </button>
          <button onClick={handleDecrement} type="button" className={btnSecondaryCx} data-testid="btnMin">
            Min
          </button>
        </div>
      </main>
    </Main>
  );
};

export default Home;
