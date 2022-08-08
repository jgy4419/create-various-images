import '../styles/globals.css'
import Layout from '../compontns/layout';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
