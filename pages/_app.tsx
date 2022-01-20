import Head from 'next/head';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import { Application, Landing } from '@layouts/index';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Auth = false;
  if (!Auth) {
    return (
      <>
        <Head>
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1'
          />
          <meta name='keywords' content='Esoque' />
          <meta name='author' content='Esoque' />
          <meta name='description' content='Esoque' />
          <title>Esoque</title>
        </Head>
        <Provider store={store}>
          <Application>
            <Component {...pageProps} />
          </Application>
        </Provider>
      </>
    );
  }
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <meta name='keywords' content='Esoque' />
        <meta name='author' content='Esoque' />
        <meta name='description' content='Esoque' />
        <title>Esoque</title>
      </Head>
      <Provider store={store}>
        <Landing>
          <Component {...pageProps} />
        </Landing>
      </Provider>
    </>
  );
};
export default appWithTranslation(MyApp);
