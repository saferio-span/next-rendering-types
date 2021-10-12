import Layout from '../components/Layout'
import Link from 'next/link'
import style from "../styles/App.module.css"
export default function Home() {
  return (
    <Layout>
      <div className="container mt-5">
        <h1 className="text-white text-center">Types of Next Rendering</h1>
        <div className='text-white text-center pt-4'>
          <Link href='render/csr'>
            <a className={style.links}>Client-Side Rendering {`(CSR)`}</a>
          </Link>
        </div>
        <div className='text-white text-center pt-4 '>
          <Link href='render/ssr'>
            <a className={style.links}>Server-Side Rendering {`(SSR)`}</a>
          </Link>
        </div>
        <div className='text-white text-center pt-4 '>
          <Link href='render/ssg'>
            <a className={style.links}>Server-Site Generation {`(SSG)`}</a>
          </Link>
        </div>
        <div className='text-white text-center pt-4 '>
          <Link href='render/isr'>
            <a className={style.links}>Incremental-Static Regeneration {`(ISR)`}</a>
          </Link>
        </div>
      </div>
        
    </Layout>
      
  )
}
