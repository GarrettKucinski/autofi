import 'tailwindcss/tailwind.css'
import { Provider } from 'react-redux';

import Layout from '../components/Layout'

import { useStore }from '../store/store'; 

export default function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initializeReduxState);

  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
