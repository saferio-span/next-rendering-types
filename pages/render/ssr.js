import axios from "axios"
import Link from "next/link"
import moment from 'moment';
import Layout from "../../components/Layout"
import RealTime from "../../components/RealTime";

export const getServerSideProps = async () => {
    const res = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
    return {
        props: { dateTime: res.data.datetime},
    };
};

const SsrPage = ({ dateTime }) => {
    console.log(`SSR ${dateTime}`)
    return (
        <Layout>
            <div className='text-light text-center container mt-5 pt-5'>
                <h3>SSR - Server-Side Rendering </h3>
                <h6 className="mt-3 text-warning">Data is fetched from the API before the page loads</h6>
                <h1 className="text-info mt-3">
                     {moment(dateTime).format('MMMM Do YYYY, hh:mm:ss A')}
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

export default SsrPage
