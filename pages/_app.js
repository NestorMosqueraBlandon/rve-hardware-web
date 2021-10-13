import '../styles/globals.css'
import Router from 'next/router'
import { useState } from 'react'
import LoadingBox from '../components/LoadingBox';

function MyApp({ Component, pageProps }) {
  
  const [loading, setLoading] = useState(false);

  Router.events.on('routeChangeStart', (url) => {
    setLoading(true);
  })

  Router.events.on('routeChangeComplete', (url) => {
    setLoading(false);  
  })

  return (
    <>
    {loading? <LoadingBox color="white" /> : 
      <Component {...pageProps} />    
    }
    </>
  )
  
}

export default MyApp
