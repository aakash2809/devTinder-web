import React, { useState } from 'react'
import UserCard from './UserCard';
import { BASE_URL } from '../utils/constant';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const EditProfile = ({ user }) => {
    console.log("\\\\\\===>", user)
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [age, setAge] = useState(user.age);
    const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
    const [gender, setGender] = useState(user.gender);
    const [about, setAbout] = useState(user.about);
    const [skills, setSkills] = useState(user.skills);
    const [showToast, setShowtoast] = useState(false)
    const dispatch = useDispatch()
    const [error, setError] = useState('')

    const saveProfile = async () => {
        try {
            setError('')
            const res = await axios.patch(BASE_URL + '/profile/edit',
                {
                    photoUrl,
                    firstName,
                    lastName,
                    age,
                    about,
                    skills,
                    gender
                },
                { withCredentials: true })
            console.log('====>', res.data)
            dispatch(addUser(res.data))
            setShowtoast(true)
            setTimeout(()=>{
                setShowtoast(false)
            },3000)
        } catch (err) {
            setError(err.message)
        }

    }
    return (
        <div className='flex justify-center my-5' >
            <div className='mx-10'>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <div className="card-body pb-15">
                        <h2 className="card-title justify-center">Edit Profile</h2>
                        <div>
                            <label className="form-control w-full max-w-xs">
                                <div className="label mb-1">
                                    <span className="label-text">First Name</span>
                                </div>
                                <input
                                    type="text"
                                    value={firstName}
                                    className="input input-rounded rounded-md max-w-xs w-full mb-3"
                                    onChange={(e) => { setFirstName(e.target.value) }}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs ">
                                <div className="label mb-1">
                                    <span className="label-text">Last Name</span>
                                </div>
                                <input
                                    type="text"
                                    value={lastName}
                                    className="input input-rounded rounded-md max-w-xs w-full"
                                    onChange={(e) => { setLastName(e.target.value) }}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs ">
                                <div className="label mb-1">
                                    <span className="label-text">Age</span>
                                </div>
                                <input
                                    type="text"
                                    value={age}
                                    className="input input-rounded rounded-md max-w-xs w-full"
                                    onChange={(e) => { setAge(e.target.value) }}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs ">
                                <div className="label mb-1">
                                    <span className="label-text">Photo Url</span>
                                </div>
                                <input
                                    type="text"
                                    value={photoUrl}
                                    className="input input-rounded rounded-md max-w-xs w-full"
                                    onChange={(e) => { setPhotoUrl(e.target.value) }}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs ">
                                <div className="label mb-1">
                                    <span className="label-text">Gender</span>
                                </div>
                                <input
                                    type="text"
                                    value={gender}
                                    className="input input-rounded rounded-md max-w-xs w-full"
                                    onChange={(e) => { setGender(e.target.value) }}
                                />
                            </label>
                            <label className="form-control w-full max-w-xs ">
                                <div className="label mb-1">
                                    <span className="label-text">About</span>
                                </div>
                                <input
                                    type="text"
                                    value={about}
                                    className="input input-rounded rounded-md max-w-xs w-full"
                                    onChange={(e) => { setAbout(e.target.value) }}
                                />
                            </label>
                        </div>
                        <div className="w-full mt-4">
                            <p className="text-red-500 text-center">{error}</p>
                            <div className="flex justify-center">
                                <button className="btn btn-primary" onClick={saveProfile}>Save Profile</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div >
                <UserCard user={{ photoUrl, firstName, lastName, age, about, skills, gender }} />
            </div>
            {showToast && <div className="toast toast-top toast-center">
                <div className="alert alert-success">
                    <span>Profile Saved successfully.</span>
                </div>
            </div>}
        </div>
    )
}

export default EditProfile