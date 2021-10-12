import axios from "axios"
import Link from "next/link"
import moment from 'moment';
import Layout from "../../components/Layout"
import RealTime from "../../components/RealTime";

export const getStaticProps = async()=>{
    const res = await axios.get('https://worldtimeapi.org/api/timezone/Asia/Kolkata');
    return {
        props: { dateTime: res.data.datetime},
    };
}

const SsgPage = ({dateTime}) => {
    console.log(`SSG ${dateTime}`)
    return (
        <Layout>
            <div className='text-light text-center container mt-5 pt-5'>
                <h3>SSG - Server-Side Generation </h3>
                <h6 className="mt-3 text-warning">Data will not change because the API will be hit ONLY when the application is building </h6>
                <h6 className="text-warning"> which is why the time shown is the same for each reloads.</h6>
                <h1 className="text-info mt-3">
                     {moment(dateTime).format('hh:mm:ss A')}
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

export default SsgPage
