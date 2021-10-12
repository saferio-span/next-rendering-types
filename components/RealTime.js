import {useState} from 'react'
import moment from 'moment';

const RealTime = () => {

    const [ctime,setCtime] = useState(moment().format('hh:mm:ss A'))

    const updateTime = ()=>{
        
        setCtime(moment().format('hh:mm:ss A'))
    }

    setInterval(updateTime,1000)
    return (
        <div>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <h6 className="text-light ">Real Time</h6>
            <h5 className="text-info ">
                {ctime}
            </h5>
        </div>
    )
}

export default RealTime
