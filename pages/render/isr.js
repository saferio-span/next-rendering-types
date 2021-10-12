import axios from "axios"
import Link from "next/link"
import moment from 'moment';
import Layout from "../../components/Layout"
import RealTime from "../../components/RealTime";

export const getStaticProps = async()=>{
    const res = await axios.get('https://worldtimeapi.org/api/ip');
    return {
      props: { dateTime: moment(res.data.datetime).format('h:mm:ss A')},
      revalidate: 5,
    };
}

const IsrPage = ({dateTime}) => {
    return (
        <Layout>
            <div className='text-light text-center container mt-5 pt-5'>
                <h3>ISR - Incremental-Static Regeneration </h3>
                <h6 className="mt-3 text-warning">The page is same as Static site generation...But it rebuilds the page after cooldown time which is specified</h6>
                <h1 className="text-info mt-3">
                     {dateTime}
                </h1>
                <Link href="/" passHref={true}>
                    <button className="btn btn-outline-danger mt-3 px-3">Back</button>
                </Link>
            </div>

            <div className="d-flex align-items-end flex-column mb-3" >
                <div className="mt-auto p-2 "><RealTime /></div>
            </div>
        </Layout>
    )
}

export default IsrPage