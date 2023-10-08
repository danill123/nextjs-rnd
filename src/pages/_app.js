// import '@/styles/globals.css'
import dynamic from 'next/dynamic';
const BarNav =  dynamic(() => import('@/components/BarNav'));

export default function App({ Component, pageProps }) {
  // const BarApp = Component?.appBar || (({ children }) => <AppBar />)

  return (
    <>
      <BarNav />
      <div style={{ marginBottom: '2vw' }} />
      <Component {...pageProps} />
    </>
  );
}
