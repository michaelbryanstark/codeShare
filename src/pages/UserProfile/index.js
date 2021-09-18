import React, { useState, useEffect }from 'react'
import ProfileImage from './ProfileImage'
import { getUser } from '../../api/UserService';
import MyPosts from './MyPosts';


const UserProfile = () => {

    const [user] = useState(getUser)

    if (!user) {
        return (
            <div>
                <h2>Go to Login to see your Posts</h2>
            </div>
        )
    }
    return (
        <div>
            <ProfileImage user={user} />
            <h2>{user.firstName} {user.lastName}</h2>

            <MyPosts user={user} />
        </div>
    )
}

export default UserProfile
