import React from 'react'

const UserCard = ({ user }) => {
    const { photoUrl, firstName, lastName, age, about, skills, gender } = user
    console.log(user.photoUrl)
    return (
        <div className="card bg-base-300 w-65 shadow-sm">
            <figure>
                <img
                    src={photoUrl}
                    alt="photo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{firstName+ ' ' + lastName}</h2>
               { age && gender &&<p>{age + ", "+ gender}</p>}
                <p>{about}</p>
                <div className="card-actions justify-center my-4">
                    <button className="btn btn-secondary">Ignore</button>
                     <button className="btn btn-primary">Inerested</button>
                </div>
            </div>
        </div>
    )
}

export default UserCard