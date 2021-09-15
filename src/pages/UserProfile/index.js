import React, { useState, useEffect }from 'react'
import ProfileImage from './ProfileImage'
import { getUser } from '../../api/UserService';
import MyPosts from './MyPosts';


const UserProfile = () => {

    const [user] = useState(getUser)


    return (
        <div>
            <ProfileImage user={user} />
            <h2>{user.firstName} {user.lastName}</h2>

            <MyPosts user={user} />
        </div>
    )
}

export default UserProfile
