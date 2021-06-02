import Layout from '@components/Layout/Layout';
import Router from 'next/router';
import NProgress from 'nprogress';
import type { AppProps } from 'next/app';
import 'nprogress/nprogress.css';
import '@styles/globals.scss';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
