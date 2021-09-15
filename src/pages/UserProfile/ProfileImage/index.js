import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ProfileImage = ({user}) => {

    const [img, setImg] = useState(user.img);

    const uploadImg = () => {}

    const handleOnClick = () => {
        
    }

    console.log(img);

    if (img === undefined) {
        return (
            <div className='ProfileImage'
                onClick={handleOnClick}
            >
                <FontAwesomeIcon icon={faUser} size={'6x'} />
            </div>
        )
        
    }
}

export default ProfileImage
