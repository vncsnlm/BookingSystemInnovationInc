import { Provider } from 'react-redux';
import { store } from '../../components/redux/store'; // import your Redux store
import '../styles/globals.css';

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({ Component, pageProps }) {
 return (
    <html lang="en">
      <Provider store={store}>
      <Component {...pageProps} />
      </Provider>
    </html>
  )
}

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
