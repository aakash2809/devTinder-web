import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addRequests } from '../utils/requestSlice'
import axios from 'axios'
import { BASE_URL } from '../utils/constant'


const Requests = () => {
    const requests = useSelector(state => state.requests);
    const dispatch = useDispatch()

    const fetchRequests = async () => {
        try {
            const res = await axios.get(BASE_URL + '/user/requests/recieved', { withCredentials: true })
            console.log(res.data.requests)
            dispatch(addRequests(res.data.requests))
        } catch (err) {
            console.error("Error fetching requests:", err);
            alert("Failed to load requests. Please try again later.");
        }

    }
    useEffect(() => {
        fetchRequests()
    }, []
    )
    if (!requests) return;
    if (requests.length === 0) return (<h1>No Request found!</h1>)
    return (
        <div className=' text-center my-10 pb-10'>
            <h1 className='font-bold text-emerald-600 text-3xl'>Connestion Requests</h1>
            {requests.map((req) => {

                const { _id, firstName, lastName, age, photoUrl, gender, about } = req.fromUserId
                return (
                    <div key={_id} className=' justify-between items-center flex m-4 p-4  rounded-lg bg-base-300 w-1/2 mx-auto'>
                        <div >
                            <img alt='photo' className='w-20 h-20 rounded-full' src={photoUrl}></img>
                        </div>
                        <div className='text-left mx-10'>
                            <h1 className='font-bold text-xl' >{firstName + ' ' + lastName}</h1>
                            {age && gender && <p>{age + " " + gender}</p>}
                            <p>{about}</p>
                        </div>
                        <div>
                            <button className="btn btn-secondary mx-2">Reject</button>
                            <button className="btn btn-primary mx-2">Accept</button>
                        </div>
                    </div>)
            })}
        </div>
    )
}

export default Requests