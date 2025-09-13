import React, { useEffect } from 'react'
import { BASE_URL } from '../utils/constant'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { addConnections } from '../utils/connectionSlice'

const Connections = () => {
    const connectionData = useSelector((store) => store.connections)

    const dispatch = useDispatch()
    const fetchConnections = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/connections', { withCredentials: true })
            dispatch(addConnections(res.data))
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchConnections()
    }, []
    )
    if (!connectionData?.connections) return;
    if (connectionData?.connections.length === 0) return (<h1>No connection found!</h1>)
    return (
        <div className=' text-center my-10'>
            <h1 className='font-bold text-emerald-600 text-3xl'>Connections </h1>
            {connectionData?.connections.map((conn) => {

                const { _id, firstName, lastName, age, photoUrl, gender, about } = conn
                return (
                    <div key={_id}  className=' flex m-4 p-4  rounded-lg bg-base-300 w-1/2 mx-auto'>
                        <div >
                            <img alt='photo' className='w-20 h-20 rounded-full' src={photoUrl}></img>
                        </div>
                        <div className='text-left mx-10'>
                            <h1 className='font-bold text-xl' >{firstName + ' ' + lastName}</h1>
                            {age && gender && <p>{age + " " + gender}</p>}
                            <p>{about}</p>
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default Connections