// import style from "../styles/Layout.module.css"
import Head from 'next/head'
import Script from 'next/script'

const Layout = ({children}) => {
    return (
        <div>
            <Head>
                <title>Next Demo</title>
                <meta name="keywords" content="Next Demo App" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
                <link href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" rel="stylesheet" />
            </Head>
            <>
                <Script src="https://code.jquery.com/jquery-3.6.0.min.js"></Script>
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></Script>
            </>
            <main>
                {children}
            </main>

        </div>
    )
}

export default Layout
