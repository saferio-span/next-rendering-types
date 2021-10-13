import axios from "axios"
import { useEffect,useState } from "react"
import Link from "next/link"
import moment from 'moment';
import Layout from "../../components/Layout"
import RealTime from "../../components/RealTime";

const CsrPage = () => {
    const [dateTime, setDateTime] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(()=>{
        setLoading(true)
        axios
        .get('https://worldtimeapi.org/api/timezone/Asia/Kolkata')
        .then((res) => {
          setDateTime(moment(res.data.datetime).format('MMMM Do YYYY, hh:mm:ss A'));
          setLoading(false)
        })
        .catch((error) => console.error(error));
    },[])
    return (
        <Layout>
            <div className='text-light text-center container mt-5 pt-5'>
                <h3>CSR - Client-Side Rendering </h3>
                <h6 className="mt-3 text-warning">Data is fetched from the API after the page loads</h6>
                <h1 className="text-info mt-3">
                    {
                        loading && 'Loading...'
                    }
                    {
                        !loading && dateTime
                    }
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

export default CsrPage
