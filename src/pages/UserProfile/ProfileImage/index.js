import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import UploadImageForm from '../UploadImageForm';

const ProfileImage = ({user}) => {

    if (user.img === undefined) {
        return (
            <div className='ProfileImage'>
                <FontAwesomeIcon icon={faUser} size={'6x'} />
                <UploadImageForm trigger={false} user={user}/>
            </div>
        )
        
    }

    return (
        <div className='ProfileImage'>
            <img src={user.img} alt='profile' />
            <UploadImageForm trigger={false} user={user}/>
        </div>
    )
}

export default ProfileImage
