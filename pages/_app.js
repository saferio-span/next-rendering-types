import '../styles/globals.css'
import Router from "next/router"
import NProgress from "nprogress"

function MyApp({ Component, pageProps }) {

  Router.events.on("routeChangeStart",(url)=>{
    console.log(`Click Route ${url}`)
    NProgress.start()
  })

  Router.events.on("routeChangeComplete",(url)=>{
    console.log(`End Route ${url}`)
    NProgress.done(true)
  })

  return (
    <Component {...pageProps} />)
}

export default MyApp
