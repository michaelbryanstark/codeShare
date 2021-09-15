import React, { useState, useEffect }from 'react'
import ProfileImage from './ProfileImage'
import { getUser } from '../../api/UserService';


const UserProfile = () => {

    const [user] = useState(getUser)


    return (
        <div>
            <ProfileImage user={user} />
        </div>
    )
}

export default UserProfile
