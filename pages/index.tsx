import React, { useMemo } from 'react';

import { Landing } from '@layouts/index';
import { Home } from '@view/index';
import { TinaCMS, TinaProvider } from 'tinacms';
import { HOME_BLOCKS } from '@tina/configSections';
import { TinaPageWrapper } from '@tina/TinaPageWrapper';

import styles from '@view/landing/home/Home.module.scss';

// Позднее этот объект будет вынесен на бэкенд
// и я его буду подгружать при загрузке стр
export const pageData = {
  blocks: [
    // Некоторые поля тут как пример

    {
      title: 'esoque',
      subtitle: 'New yourk 2005 EST',
      color: '#E2F063',
      _template: 'headerBlock',
    },
    {
      title: 'esoque',
      subtitle: 'New yourk 2005 EST',
      color: '#E2F063',
      _template: 'helloBlock',
    },
    {
      title: 'esoque',
      subtitle: 'New yourk 2005 EST',
      color: '#E2F063',
      _template: 'servicesBlock',
    },
    {
      title: 'esoque',
      subtitle: 'New yourk 2005 EST',
      color: '#E2F063',
      _template: 'conclusionBlock',
    },
  ],
};

const HomePage: React.FC = () => {
  const cms = useMemo(() => {
    return new TinaCMS({
      enabled: true,
      sidebar: {
        position: 'overlay',
      },
    });
  }, []);

  return (
    // <TinaProvider cms={cms}>
    <Landing>
      {/* <div className={styles.HomePage}>
          <TinaPageWrapper
            pageName={"HomePage"}
            blockSchema={HOME_BLOCKS}
            data={pageData}
          />
        </div> */}
      <Home />
    </Landing>
    // </TinaProvider>
  );
};

export default HomePage;
